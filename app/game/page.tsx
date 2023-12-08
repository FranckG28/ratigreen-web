"use server";

import React from "react";
import PointIndicators from "./PointIndicator";
import QuestionPage from "./QuestionPage";

export default async function Game() {
  return (
    <>
      <div className="flex flex-col lg:flex-row max-lg:gap-4 items-center justify-center">
        <div className="flex flex-col grow justify-center lg:flex-row gap-4 lg:gap-6 items-center">
          <PointIndicators />
        </div>
        <div className="max-xl:hidden" style={{ width: "160px" }}></div>{" "}
        {/* To center my grow dir */}
      </div>
      <QuestionPage />
    </>
  );
}
