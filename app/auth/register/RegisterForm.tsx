"use client";

import { register } from "@/app/actions/register.action";
import SubmitButton from "@/app/components/SubmitButton";
import { useFormState } from "react-dom";

export default function RegisterForm() {
  const [state, formAction] = useFormState(register, { message: "" });

  return (
    <form
      className="flex flex-col gap-2 w-full max-w-sm py-6"
      action={formAction}
    >
      <input
        type="text"
        name="name"
        placeholder="Nom"
        className="input input-bordered w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input input-bordered w-full"
      />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        className="input input-bordered w-full"
      />
      <input
        type="password"
        name="passwordConfirm"
        placeholder="Confirmer le mot de passe"
        className="input input-bordered w-full"
      />
      <p aria-live="polite" className="text-error">
        {state?.message}
      </p>
      <SubmitButton>S'inscrire</SubmitButton>
    </form>
  );
}
