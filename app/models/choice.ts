import { IndicatorCoefficient } from "./indicator-coefficient";

export interface Choice {
    id: number;
    text: string;
    questionId: number;
    indicatorCoefficients: IndicatorCoefficient[];
}