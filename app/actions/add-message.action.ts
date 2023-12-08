"use server";

import { cookies } from "next/headers";
import { JWT_access_token_cookie } from "../constants";

export const addMessageAction = async (formData: FormData, questionId: number) => {
    const token = cookies().get(JWT_access_token_cookie)?.value;

    if (!token) {
        return null;
    }

    const text = formData.get('text');

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + 'questions/' + questionId + '/message', 
    {
        method: 'POST',
        body:  text,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    }); 

    return { status: response.status, text: await response.text() };
}