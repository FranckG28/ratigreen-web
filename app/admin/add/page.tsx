"use client";

import {
  addImageQuestionAction,
  addQuestionAction,
} from "@/app/actions/add-question.action";
import React, { useRef, useState } from "react";
import ChoiceInput from "../components/ChoiceInput";
import { toast } from "@/app/components/Toast";
import FileInput from "../components/FileInput";
import Link from "next/link";

export default function CreateQuestion() {
  const ref = useRef<HTMLFormElement>(null);

  const [isAnswerFirstChoice, setIsAnswerFirstChoice] = useState<boolean>(true);
  const onAnswerFirstChoice = () => {
    setIsAnswerFirstChoice(!isAnswerFirstChoice);
  };

  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

  const onAddQuestion = async (formData: FormData) => {
    const answer: string = isAnswerFirstChoice
      ? (formData.get("choices[0].text") as string)
      : (formData.get("choices[1].text") as string);
    formData.append("answer", answer);

    const response = addQuestionAction(formData);
    response.then(async (responseQuestion) => {
      const returnQuestionInfo = JSON.parse(responseQuestion.text);
      const questionId = returnQuestionInfo.id;

      const responseImage = await addImageQuestionAction(formData, questionId);

      if (responseQuestion.status === 200 && responseImage.status === 200) {
        toast.success(JSON.parse(responseQuestion.text).message);
        ref.current?.reset();
        setImagePreviewUrl(null);
      } else {
        toast.error(
          "Une erreur est survenue lors de l'ajout de la question et de l'image."
        );
      }
    });
  };

  return (
    <form ref={ref} action={onAddQuestion}>
      <div className="flex flex-col lg:flex-row gap-5 justify-between mb-6">
        <div className="flex gap-4 items-center">
          <Link href="/admin">Retour</Link>
          <h1 className="text-3xl font-bold">Ajouter une question</h1>
        </div>
        <button type="submit">Ajouter</button>
      </div>

      <section className="grid lg:grid-cols-2 gap-x-8 lg:gap-y-8 gap-y-2">
        <div className="flex flex-col gap-2 h-36">
          <h2 className="text-2xl opacity-80 font-bold">QUESTION</h2>
          <textarea
            style={{ resize: "none" }}
            name="question"
            className="rounded-2xl bg-pinkColor p-4 h-full"
            defaultValue="Est-ce que le VIH est une maladie ?"
            required
          ></textarea>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl opacity-80 font-bold uppercase">
            Insérer une image
          </h2>
          <FileInput
            setImagePreviewUrl={setImagePreviewUrl}
            imagePreviewUrl={imagePreviewUrl}
          />
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
  );
}
