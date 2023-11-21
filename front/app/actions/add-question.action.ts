"use server";

import { revalidatePath } from "next/cache";
import { ChoiceDto, QuestionDto } from "../DTOs/add-question.dto";
import { Indicator } from "../models/indicator";

const buildIndicatorCoefficients = (formData: FormData, choiceIndex: Number) => {
    return Object.values(Indicator).map((indicator, index) => ({
        indicator,
        coefficient: Number(formData.get(`choices[${choiceIndex}].indicator[${index}]`))
    }));
}
  
const buildChoices = (formData: FormData) => {
    return [0, 1].map(choiceIndex => ({
        text: formData.get(`choices[${choiceIndex}].text`),
        indicatorCoefficients: buildIndicatorCoefficients(formData, choiceIndex)
    }));
}
  
export const addQuestionAction = async (formData: FormData) => {
    
    const question: QuestionDto = {
        title: formData.get('question') as string,
        answer: formData.get('answer') as string,
        choices: buildChoices(formData) as ChoiceDto[]
    };
        
    console.log(JSON.stringify(question));

    await fetch(process.env.API_ROUTE_URL + 'questions', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(question),
    });

    // Revalidate cache when we will refresh the page /admin
    revalidatePath('/admin');
}