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
  "C'est faux ??? Maman ne m'a pas dit ça.",
  "Je vais le dire à mon Papa",
  "Je ne me suis pas levé pour rien ce matin",
  "Je ne savais pas ça",
  "je me coucherais moins bête ce soir",
];

export default function Message({ question }: { question: Question }) {
  return (
    <div className="overflow-auto bg-base-200 rounded-xl h-1/3 justify-center shadow-xl shadow-primary/10">
      <div className="text-primary-content text-lg font text-center p-10">
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
        <div className="chat chat-start">
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
        {/* <InputMessage questionId={question.id} /> */}
      </div>
    </div>
  );
}
