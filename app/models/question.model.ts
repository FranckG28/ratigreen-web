import { Source } from "./source.model";
import { Data } from "./data.model";

export interface Question {
    id: number;
    title: string;
    answer: boolean;
    imageUrl: string;
    sources: Source[];
    datas: Data[];
}
