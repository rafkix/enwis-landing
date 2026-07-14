import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Ismingizni kiriting"),
  email: z.string().email("To'g'ri elektron pochta kiriting"),
  organization: z.string().optional(),
  topic: z.string().min(1, "Murojaat turini tanlang"),
  message: z.string().min(10, "Xabar kamida 10 belgidan iborat bo'lishi kerak"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const CONTACT_TOPIC_LABELS: Record<string, string> = {
  demo: "Demo so'rash",
  sales: "Sotuv bo'limi",
  support: "Texnik yordam",
  general: "Umumiy savol",
};
