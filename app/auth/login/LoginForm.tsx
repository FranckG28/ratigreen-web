"use client";

import { login } from "@/app/actions/login.action";
import SubmitButton from "@/app/components/SubmitButton";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [state, formAction] = useFormState(login, { message: "" });

  return (
    <form
      className="flex flex-col gap-2 card bg-base-200 shadow-xl p-6 w-full max-w-sm"
      action={formAction}
    >
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="input input-bordered w-full"
        required
      />
      <input
        type="text"
        name="password"
        placeholder="Mot de passe"
        className="input input-bordered w-full"
        required
      />
      <p aria-live="polite" className="text-error">
        {state?.message}
      </p>
      <SubmitButton>Se connecter</SubmitButton>
    </form>
  );
}