'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { decodeBase64 } from "../utility/base64";

export async function login(prevState: any, formData: FormData) {

    try {
        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password) {
            return { message: "Veuillez remplir tous les champs" }
        }

        const res = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/login`, {
            cache: 'no-store',
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })).json();

        const accessToken = res.tokens.accessToken;
        const user = res.user;

        if(!accessToken) {
            throw Error("No access token")
        }

        cookies().set('access_token', accessToken)
    } catch (error) {
        console.log(error);
        return { message: "Une erreur est survenue" }
    }
    redirect("/");
}