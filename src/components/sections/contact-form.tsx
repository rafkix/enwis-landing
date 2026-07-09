"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { CONTACT_TOPICS } from "@/lib/constants";
import { contactSchema, type ContactFormValues } from "@/lib/schemas";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { topic: "demo" },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Xabarni yuborib bo'lmadi.");
      }

      setStatus("success");
      reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Xabarni yuborishda xatolik yuz berdi. Birozdan so'ng qayta urinib ko'ring."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white px-8 py-16 text-center"
      >
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-volt)]/20">
          <CheckCircle2 className="h-7 w-7 text-[var(--color-deep)]" />
        </div>
        <h3 className="font-display text-xl font-medium text-[var(--color-ink)]">
          Xabaringiz yuborildi
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--color-slate)]">
          Jamoamiz 1 ish kuni ichida siz bilan bog&apos;lanadi. Shoshilinch masala bo&apos;lsa,
          to&apos;g&apos;ridan-to&apos;g&apos;ri hello@enwis.uz manziliga yozishingiz mumkin.
        </p>
        <Button variant="outline" size="md" className="mt-6" onClick={() => setStatus("idle")}>
          Yana xabar yuborish
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white p-6 sm:p-8"
    >
      <AnimatePresence>
        {status === "error" && errorMessage && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: "auto", marginBottom: 20 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-3 overflow-hidden rounded-[var(--radius-lg)] border border-red-200 bg-red-50 px-4 py-3"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
            <p className="text-sm text-red-700">{errorMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName">Ism familiya</Label>
          <Input
            id="fullName"
            placeholder="Masalan: Aziz Karimov"
            hasError={!!errors.fullName}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Elektron pochta</Label>
          <Input
            id="email"
            type="email"
            placeholder="ism@muassasa.uz"
            hasError={!!errors.email}
            {...register("email")}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <Label htmlFor="organization">Tashkilot nomi (ixtiyoriy)</Label>
          <Input
            id="organization"
            placeholder="Maktab, universitet yoki markaz nomi"
            {...register("organization")}
          />
        </div>

        <div>
          <Label htmlFor="topic">Murojaat turi</Label>
          <Select id="topic" hasError={!!errors.topic} {...register("topic")}>
            {CONTACT_TOPICS.map((topic) => (
              <option key={topic.value} value={topic.value}>
                {topic.label}
              </option>
            ))}
          </Select>
          {errors.topic && <p className="mt-1.5 text-xs text-red-500">{errors.topic.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="message">Xabar</Label>
          <Textarea
            id="message"
            rows={5}
            placeholder="Ehtiyojingiz haqida bir necha gap yozing..."
            hasError={!!errors.message}
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="mt-6 w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "submitting" ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Loader2 className="h-4 w-4 animate-spin" /> Yuborilmoqda...
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Send className="h-4 w-4" /> Xabar yuborish
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </form>
  );
}
