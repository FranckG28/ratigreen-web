import { Choice } from "./choice";

export interface Question {
    id: number;
    title: string;
    answer: string;
    imageUrl: string;
    choices: Choice[];
}
