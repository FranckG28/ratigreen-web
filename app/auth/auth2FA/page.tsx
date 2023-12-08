/* eslint-disable react/no-unescaped-entities */
"use server";

import Container from "@/app/components/Container";
import { useJwtToken } from "@/app/hooks/useJwtToken";
import Image from "next/image";
import Enable2FAForm from "./Enable2FAForm";
import { redirect } from "next/navigation";

export default async function Enable2FA() {
  const token = useJwtToken();

  if (!token) {
    redirect("auth/login");
  }

  const data = await (
    await fetch(`${process.env.API_URL}auth/two-fa/generate`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();

  return (
    <Container className="grid lg:grid-cols-2 items-center">
      <div>
        <Image src={data.image} width={400} height={400} alt="QR code" />
        <Enable2FAForm />
      </div>
      <article className="prose">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium tracking-tight">
            Comment activer la 2FA ?
          </h1>
          <div>
            <p>
              Installez une application d'authentification sur votre téléphone
              (Google authenticator, Microsoft authenticator, Aegis...)
            </p>
            <p>Scannez le QR-code avec l'application d'authentification.</p>
            <p>Entrez le code dans le champ "Code OTP" puis validez.</p>
          </div>
        </div>
      </article>
    </Container>
  );
}
