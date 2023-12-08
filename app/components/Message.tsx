import React from "react";
import { Question } from "../models/question.model";
import InputMessage from "./InputMessage";

const messagesMock = [
  "Oh j'ai vraiment appris quelque chose d'intéressant",
  "Merci pour l'info !",
  "Aaaaah top !!",
  "Comment ça ? Je n'ai pas compris ..",
  "Heeey !",
  "Aaah je comprend mieux",
  "C'est vrai ???",
];

export default function Message({ question }: { question: Question }) {
  return (
    <div className="overflow-auto bg-white rounded-xl h-1/3 justify-center shadow shadow-primary/50">
      <div className="text-primary-content text-lg font text-center p-10">
        {
          <div className="chat chat-end">
            <div className="chat-bubble">
              {
                messagesMock[
                  Math.floor(
                    Math.random() * (messagesMock.length - 1 - 0 + 1) + 0
                  )
                ]
              }
            </div>
          </div>
        }
        {/* <InputMessage questionId={question.id} /> */}
      </div>
    </div>
  );
}
