"use client"

import { addQuestionAction } from '@/app/actions/add-question.action';
import React, { useState } from 'react'
import Button from '@/app/components/Button';
import ChoiceInput from './components/ChoiceInput';
import { toast } from '@/app/components/Toast';

export default function CreateQuestion() {

  const [isAnswerFirstChoice, setIsAnswerFirstChoice] = useState<boolean>(true);
  const onAnswerFirstChoice = () => {
    setIsAnswerFirstChoice(!isAnswerFirstChoice);
  }

  const onAddQuestion = async (formData: FormData) => {
    const answer : string = isAnswerFirstChoice ? formData.get("choices[0].text") as string : formData.get("choices[1].text") as string;
    formData.append("answer", answer);

    const response = await addQuestionAction(formData);

    if (response.status === 200) {
      toast.success(response.text);
    } else {
      toast.error('Une erreur est survenue lors de l\'ajout de la question.');
    }
  }

  return (
    <>
        <form className="" action={onAddQuestion}>
          <div className='flex flex-col lg:flex-row gap-5 justify-between mb-6'>
            <div className='flex gap-4 items-center'>
              <div className='rotate-180 w-20'>
                  <Button text="" href="/admin" />
              </div>
              <h1 className="text-3xl font-bold">Ajouter une question</h1>
            </div>
              <div className=''>
                <Button text="Ajouter" type="submit" />
            </div>
          </div>

          <section className='grid lg:grid-cols-2 gap-x-8 lg:gap-y-8 gap-y-2'>
            <div className='flex flex-col gap-2 h-36'>
              <h2 className='text-2xl opacity-80 font-bold'>QUESTION</h2>
              <textarea style={{ resize: 'none' }} name="question" className='rounded-2xl bg-pinkColor p-4 h-full' defaultValue="Est-ce que le VIH est une maladie ?" required></textarea>
            </div>

            <div className=''>
            </div>

            <ChoiceInput
              indexChoice={0}
              isAnswer={isAnswerFirstChoice}
              onRadioClickIsAnswer={onAnswerFirstChoice}
              choiceTitle="Premier choix"
            />

            <ChoiceInput
              indexChoice={1}
              isAnswer={!isAnswerFirstChoice}
              onRadioClickIsAnswer={onAnswerFirstChoice}
              choiceTitle="Second choix"
            /> 
          </section>
        </form>
    </>
  );
}
