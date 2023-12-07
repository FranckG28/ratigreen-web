import { Indicator } from "../models/indicator";

export type IndicatorCoefficientDto = {
    indicator: Indicator;
    coefficient: number;
  }
  
export type ChoiceDto = {
    text: string;
    indicatorCoefficients: IndicatorCoefficientDto[];
}

export type QuestionDto = {
    title: string;
    answer: string;
    choices: ChoiceDto[];
}
  