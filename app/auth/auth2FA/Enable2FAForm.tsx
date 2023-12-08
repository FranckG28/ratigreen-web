"use client";

import { login } from "@/app/actions/login.action";
import { Otp } from "@/app/actions/otp.action";
import SubmitButton from "@/app/components/SubmitButton";
import { useFormState } from "react-dom";

export default function Enable2FAForm() {
  const [state, formAction] = useFormState(Otp, { message: "" });

  return (
    <form
      className="flex flex-col gap-2 w-full max-w-sm py-6"
      action={formAction}
    >
      <input
        name="otp"
        type="text"
        placeholder="Code OTP"
        className="input input-bordered w-full"
        required
      />
      <p aria-live="polite" className="text-error">
        {state?.message}
      </p>
      <SubmitButton>Activer la 2FA</SubmitButton>
    </form>
  );
}
