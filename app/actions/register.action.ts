'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

export async function register(prevData: any, formData: FormData) {

    try {
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const passwordConfirm = formData.get("passwordConfirm");

        if (!name || !email || !password || !passwordConfirm) {
            return { message: "Veuillez remplir tous les champs" }
        }

        if (password !== passwordConfirm) {
            return { message: "Les mots de passe ne correspondent pas" }
        }

        const res = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/register`, {
            cache: 'no-store',
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })).json();

        console.log("res", res)

        if(res.statusCode === 400) {
            return { message: res.message }
        }
    } catch (error) {
        return { message: "Une erreur est survenue : " + error }
    }

    redirect(`/auth/login`)
}