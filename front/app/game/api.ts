import { Question } from "../models/question";

export async function GET() : Promise<Question[]> {
    const res = await fetch(process.env.API_ROUTE_URL + 'questions')
    const data = await res.json() as Question[]

    //const questions: Question[] = data.map(mapQuestion)

    return data; 
}
