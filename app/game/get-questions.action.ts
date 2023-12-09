"use server";

import { Question } from "../models/question.model";

export async function getQuestions(): Promise<Question[]> {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'questions', { cache: 'no-store' })
    const data = await res.json() as Question[]
    return data;
}
