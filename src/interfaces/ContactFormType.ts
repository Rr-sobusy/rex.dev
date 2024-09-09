import { z } from "zod";

export const ContactFormType = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter a valid email" })
    .email({ message: "Please enter a valid email" }),
  subject: z.string().min(5, { message: "Please enter longer subject" }),
  message: z.string().min(10, { message: "Please enter longer message" }),
});

export type contactFormType = z.infer<typeof ContactFormType>;
