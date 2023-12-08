"use client";

import { login } from "@/app/actions/login.action";
import SubmitButton from "@/app/components/SubmitButton";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [state, formAction] = useFormState(login, { message: "" });

  return (
    <form
      className="flex flex-col gap-2 w-full max-w-sm py-6"
      action={formAction}
    >
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="input input-bordered w-full"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Mot de passe"
        className="input input-bordered w-full"
        required
      />
      {state?.message == "missingOTP" ? (
        <input
          name="otp"
          type="text"
          placeholder="OTP Code"
          className="input input-bordered w-full"
          required
        />
      ) : null}
      <p aria-live="polite" className="text-error">
        {state?.message === "missingOTP"
          ? "Veuillez ajouter votre code OTP"
          : state?.message}
      </p>
      <SubmitButton>Se connecter</SubmitButton>
    </form>
  );
}
