"use server"

import { revalidatePath } from "next/cache";

export const removeQuestionAction = async (id: number) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}questions/${id}`, { 
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const textData = await response.text();

    revalidatePath('/admin');

    return { status: response.status, text: textData };
    
}