"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function Faq() {
  return (
    <section className="section-pad bg-[var(--color-mist)]">
      <div className="container-editorial max-w-3xl">
        <SectionHeading
          align="center"
          eyebrow="Savol-javob"
          title="Ko'p so'raladigan savollar"
          className="mx-auto"
        />

        <Accordion type="single" collapsible className="mt-12 rounded-[var(--radius-2xl)] bg-white px-6">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
