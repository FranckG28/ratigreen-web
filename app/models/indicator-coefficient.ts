import { Indicator } from "./indicator";

export interface IndicatorCoefficient {
    id: number;
    coefficient: number;
    choiceId: number;
    indicator: Indicator;
}