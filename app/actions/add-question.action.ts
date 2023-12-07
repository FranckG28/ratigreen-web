"use server";

import { revalidatePath } from "next/cache";
import { ChoiceDto, QuestionDto } from "../DTOs/add-question.dto";
import { Indicator } from "../models/indicator";
import { redirect } from "next/navigation";


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

    const response  = await fetch(process.env.NEXT_PUBLIC_API_URL + 'questions', {
        method: 'POST',
        cache: "no-store", // to be able to send the same data twice
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(question),
    });

    const textData = await response.text();

    //  const errorData = await response.json(); // Impossible L’erreur “Body is unusable” se produit lorsque vous essayez de lire le corps de la réponse plus d’une fois.

    //if (response.ok) { // if HTTP-status is 200-299
    //    console.info("Question added successfully");
    //} else {
    //    let errorData;
    //    try {
    //        errorData = JSON.parse(textData);
    //    } catch (e) {
    //        console.error("Error parsing JSON: ", e);
    //    }
    //    console.error(JSON.stringify(errorData, null, 2));
    //    console.log("HTTP-Error: " + response.status);
    //}

    // Revalidate cache when we will refresh the page /admin
    revalidatePath('/admin')

    return { status: response.status, text: textData };
}

export const addImageQuestionAction = async (formData: FormData, questionId: string) => {
    const formDataImage = new FormData();
    formDataImage.append('image', formData.get('image') as File);

    const responseImage = await fetch(process.env.NEXT_PUBLIC_API_URL + 'questions/upload/' + questionId, 
    {
        method: 'POST',
        body:  formDataImage
    });

    return { status: responseImage.status, text: await responseImage.text() };
}