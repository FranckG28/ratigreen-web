import { Question } from "./question.model";

export interface Source {
    id: number;
    questionId: number;
    question: Question;
    name: string;
    link: string | null;
}