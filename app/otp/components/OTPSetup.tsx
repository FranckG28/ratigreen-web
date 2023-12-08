"use client";

import { useEffect, useState } from "react";
import CodeInput from "./CodeInput";

export default function OTPSetup() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-bold">
        Configurer l&apos;authentification à deux facteurs
      </h3>

      <div className="grid lg:grid-cols-2">
        <div className="">
          <h5 className="text-lg font-bold">Étape 1</h5>
          <p>
            Utilisez une application d&apos;authentification sur à deux facteurs
            sur votre smartphone. (exemple: Google Authentificator ou Microsoft
            Authentificator) pour scanner le QR-code
          </p>
        </div>
        <div className="h-32 w-32 bg-primary rounded-md"></div>
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="">
          <h5 className="text-lg font-bold">Étape 2</h5>
          <p>
            Entrez le code d&apos;authentification à double facteur généré par
            l&apos;application pour confirmer l&apos;activation de la double
            authentification sur votre compte
          </p>
        </div>
        <div className="self-center">
          <CodeInput onOtpSet={(otp) => console.log("otp", otp)} />
        </div>
      </div>

      <div className="flex justify-between">
        <button className="btn btn-ghost">Plus tard</button>
        <button className="btn btn-primary" aria-disabled={true}>
          Confirmer
        </button>
      </div>
    </div>
  );
}
