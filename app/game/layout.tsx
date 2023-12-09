"use server";

import Container from "../components/Container";
import GameProvider from "../providers/GameProvider";
import { Question as QuestionModel } from "../models/question.model";
import { getQuestions } from "./get-questions.action";
import PointIndicators from "./PointIndicator";
import Planet from "../components/Planet";
import Balancer from "react-wrap-balancer";
import NextRound from "../components/NextRoundButton";

async function fetchQuestions(): Promise<QuestionModel[]> {
  const questions = await getQuestions();
  // randomize questions order
  //questions.sort(() => Math.random() - 0.5);
  return questions;
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const questions = await fetchQuestions();

  return (
    <Container>
      <GameProvider questions={questions}>
        <div className="grid lg:grid-cols-2 gap-4 flex-1">
          {children}
          <div className="">
            <div className="flex flex-col justify-center gap-6 lg:fixed lg:right-0 -translate-x-1/3 lg:max-w-[30vw]">
              <PointIndicators />
              <Planet />
              <Balancer className="text-base-content/50 text-sm text-center mx-auto">
                Combattez le réchauffement climatique de votre planète en
                répondant correctement aux questions !
              </Balancer>
              <NextRound className="w-full shadow-lg shadow-primary/20 animate-bounce mt-8" />
            </div>
          </div>
        </div>
      </GameProvider>
    </Container>
  );
}
