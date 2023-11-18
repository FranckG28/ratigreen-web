import { Question } from "../models/question";

export async function GET() : Promise<Question[]> {
    const res = await fetch('http://localhost:3000/api/questions')
    const data = await res.json() as Question[]

    //const questions: Question[] = data.map(mapQuestion)

    return data; 
}
