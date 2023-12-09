"use server";

import GameProvider from "../providers/GameProvider";
import { getQuestions } from "./get-questions.action";
import GamePage from "./GamePage";
import Balancer from "react-wrap-balancer";
import NextRound from "../components/NextRoundButton";
import Planet from "../components/Planet";
import PointIndicators from "./PointIndicator";

export default async function Page() {
  const questions = await getQuestions();

  return (
    <GameProvider questions={questions}>
      <div className="grid lg:grid-cols-2 gap-8 flex-1">
        <GamePage />
        <div className="flex flex-col justify-center gap-6 lg:sticky lg:right-0 max-lg:pb-20 lg:self-center">
          <PointIndicators />
          <Planet />
          <Balancer className="text-base-content/50 text-sm text-center mx-auto">
            Combattez le réchauffement climatique de votre planète en répondant
            correctement aux questions !
          </Balancer>
          <NextRound className="w-full shadow-lg shadow-primary/20 animate-bounce mt-8" />
        </div>
      </div>
    </GameProvider>
  );
}
