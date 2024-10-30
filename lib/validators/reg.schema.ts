import { z } from 'zod';

export const personalInfoSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  dateOfBirth: z.date(),
});

export const contactInfoSchema = z.object({
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
});

export const visitInfoSchema = z.object({
  visitDate: z.date(),
  purpose: z.string().min(10, "Purpose must be at least 10 characters"),
});

export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type ContactInfo = z.infer<typeof contactInfoSchema>;
export type VisitInfo = z.infer<typeof visitInfoSchema>;