import { NextResponse } from "next/server";
import { contactSchema, CONTACT_TOPIC_LABELS } from "@/lib/schemas";

/**
 * Forwards contact form submissions to a Telegram chat via a bot.
 *
 * Setup (see README.md for the full walkthrough):
 *   1. Create a bot with @BotFather on Telegram, copy its token.
 *   2. Get the numeric chat id you want messages delivered to
 *      (a personal chat, or a group/channel the bot is added to).
 *   3. Set these in your environment (.env.local, or your host's
 *      environment variables — never commit real values):
 *        TELEGRAM_BOT_TOKEN=123456:ABC-your-bot-token
 *        TELEGRAM_CHAT_ID=123456789
 */
export async function POST(request: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error(
      "Contact form: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set in the environment."
    );
    return NextResponse.json(
      { ok: false, error: "Server is not configured to receive messages yet." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const { fullName, email, organization, topic, message } = parsed.data;
  const topicLabel = CONTACT_TOPIC_LABELS[topic] ?? topic;

  const text = [
    "📩 *Enwis — yangi murojaat*",
    "",
    `*Turi:* ${escapeMarkdown(topicLabel)}`,
    `*Ism:* ${escapeMarkdown(fullName)}`,
    `*Email:* ${escapeMarkdown(email)}`,
    organization ? `*Tashkilot:* ${escapeMarkdown(organization)}` : null,
    "",
    `*Xabar:*\n${escapeMarkdown(message)}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const telegramRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "MarkdownV2",
      }),
    });

    if (!telegramRes.ok) {
      const errorBody = await telegramRes.text();
      console.error("Telegram API error:", errorBody);
      return NextResponse.json(
        { ok: false, error: "Failed to deliver the message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { ok: false, error: "Unexpected error while sending the message." },
      { status: 500 }
    );
  }
}

/** Telegram MarkdownV2 requires escaping these characters in plain text. */
function escapeMarkdown(input: string): string {
  return input.replace(/[_*[\]()~`>#+\-=|{}.!\\]/g, "\\$&");
}
