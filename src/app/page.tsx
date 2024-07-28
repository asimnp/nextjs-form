"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (password !== confirmPassword) {
      setErrors(["Password and confirm password must match"]);
      setIsSubmitting(false);
      return;
    }

    // submit form to server
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-2 w-1/3 mx-auto mt-32"
    >
      {errors.length > 0 && (
        <ul>
          {errors.map((error) => (
            <li
              key={error}
              className="bg-red-100 text-red-500 px-4 py-2 rounded"
            >
              {error}
            </li>
          ))}
        </ul>
      )}

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email"
        className="px-4 py-2 rounded border"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Password"
        className="px-4 py-2 rounded border"
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        placeholder="Confirm Password"
        className="px-4 py-2 rounded border"
      />
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
