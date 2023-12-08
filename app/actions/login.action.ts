'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { JWT_access_token_cookie } from "../constants";

export async function login(prevState: any, formData: FormData) {

    const email = formData.get("email");
    const password = formData.get("password");
    const otp = formData.get("otp")

    if (!email || !password) {
        return { message: "Veuillez remplir tous les champs" }
    }

    let res = null;

    if(!otp) {
        res = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/login`, {
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
    } else {
        res = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/two-fa/authenticate`, {
            cache: 'no-store',
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                twoFaCode: otp,
            }),
        })).json();
    }

    console.log("res", res)

    if(res.statusCode === 401) {
        return { message: res.message }
    }

    if(!res.tokens) {
        return { message: "Email ou mot de passe incorrect" }
    }

    const accessToken = res.tokens.accessToken;
    const user = res.user;

    if(!accessToken && !user.isTwoFAEnabled) {
        throw Error("No access token")
    }

    if(user.isTwoFAEnabled) {
        if(!formData.get("otp")) {
            console.log("hlaaaaaa")
            return { message: "missingOTP"}
        }
        if(formData.get("otp") && res.tokens.accessToken){
            cookies().set(JWT_access_token_cookie, accessToken)
            redirect("/")
        }
    } else {
        cookies().set(JWT_access_token_cookie, accessToken)
        redirect("/auth/ask2FA");
    }
}