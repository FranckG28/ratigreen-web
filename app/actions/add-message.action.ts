"use server";

import { cookies } from "next/headers";
import { JWT_access_token_cookie } from "../constants";

export const addMessageAction = async (formData: FormData, questionId: number) => {
    const token = cookies().get(JWT_access_token_cookie)?.value;

    if (!token) {
        return null;
    }

    const text = formData.get('text');

    const response = await (await fetch(process.env.NEXT_PUBLIC_API_URL + 'questions/' + questionId + '/message', 
    {
        cache: 'no-cache',
        method: 'POST',
        body:  JSON.stringify({ text }),
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })).json(); 

    return { status: response.status, text: response.text };
}