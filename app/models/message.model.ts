import { PublicUser } from "./public-user";
import { Question } from "./question.model";

export type Message = {
    id: number;
    text: string;
    userId: number;
    user: PublicUser;
    question: Question;
    questionId: number;
    createdAt: Date;
    updatedAt: Date;
}