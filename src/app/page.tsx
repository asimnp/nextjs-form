"use client";

import { useForm, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpSchema, TSignUpSchema } from "@/lib/types";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: TSignUpSchema) => {
    // Mock: submit to server
    await new Promise((resolve) => setTimeout(resolve, 2000));

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-2 w-1/3 mx-auto mt-32"
    >
      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded border"
      />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}

      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded border"
      />
      {errors.password && (
        <p className="text-red-500">{`${errors.password.message}`}</p>
      )}

      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="Confirm Password"
        className="px-4 py-2 rounded border"
      />
      {errors.confirmPassword && (
        <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 hover:bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed py-2 rounded text-white"
      >
        Submit
      </button>
    </form>
  );
}
