
export type SourceDto = {
    name: string;
    link: string | null;
}

export type Data = {
    answer: string;
    value: number;
    explanation: string;
}

export type QuestionDto = {
    title: string;
    answer: boolean;
    sources: SourceDto[];
    datas: Data[];
}
  