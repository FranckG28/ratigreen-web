'use server'

import { redirect } from "next/navigation";
import { useJwtToken } from "../hooks/useJwtToken";

export async function Otp(prevState: any, formData: FormData) {

    const otpCode = formData.get("otp");
    const token = useJwtToken();

    if(!token) {
        return { message: "Veuillez vous connecter" }
    }

    if (!otpCode) {
        return { message: "Veuillez remplir tous les champs" }
    }

    console.log("change otp tokenjwt", token)


    const res = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/two-fa/change`, {
        cache: 'no-store',
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            enable: true,
            twoFactorAuthenticationCode: otpCode,
        }),
    })).json();

    if(res.statusCode === 401) {
        return { message: "Code OTP invalide" }
    }
    
    redirect("/");
}