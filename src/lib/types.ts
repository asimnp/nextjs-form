import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email({ message: "Email field is required" }),
    password: z.string().min(10, "Password must be at least 10 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password must be same",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
