import { Choice } from "./choice";

export interface Question {
    id: number;
    title: string;
    answer: string;
    choices: Choice[];
}
