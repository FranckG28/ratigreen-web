"use server";

import Link from "next/link";
import { Question } from "../models/question.model";
import ActionQuestion from "./components/ActionQuestion";
import Image from "next/image";

// async function getData(): Promise<Question[]> {
//   const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "questions");

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return (await res.json()) as Question[];
//   //return data.map(mapQuestion);
// }

export default async function Admin() {
  const questions = [] as Question[];

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Questions disponibles</h1>
        <div className="">
          <Link href="/admin/add" className="btn btn-primary">
            Ajouter une question
          </Link>
        </div>
      </div>

      <div className="flex flex-col m-4 gap-2">
        {questions.map((question, index) => (
          <div key={index} className="p-4 border rounded shadow mb-4">
            <div className="flex flex-row gap-2">
              <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
              <ActionQuestion actionType="delete" questionId={question.id} />
            </div>

            <Image
              className="mb-4"
              src={
                process.env.NEXT_PUBLIC_API_URL_IMAGE + `${question.imageUrl}`
              }
              alt="Question image"
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
    </>
  );
}
