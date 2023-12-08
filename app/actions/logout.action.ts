'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import { JWT_access_token_cookie } from '../constants';

export async function logout() {
    const token = cookies().get(JWT_access_token_cookie)?.value;

    if (!token) {
        return null;
    }

    try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/logout`, {
            cache: 'no-store',
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        cookies().delete(JWT_access_token_cookie)
    } catch (error) {
        return { message: "Une erreur est survenue : " + error }
    }

    redirect(`/`)
}