import { Question } from "./question.model";

export interface Data {
    id: number;
    questionId: number;
    question: Question;
    answer: string;
    value: number;
    explanation: string;
}