"use server";

import React from "react";
import PointIndicators from "./PointIndicator";
import QuestionPage from "./QuestionPage";

export default async function Game() {
  return (
    <>
      <div className="lg:flex-row max-lg:gap-4 items-center justify-center">
        <div className="flex flex-col justify-center gap-y-4 mt-12 gap-4 lg:gap-16 items-center">
          <PointIndicators />
          <QuestionPage />
        </div>
        <div className="max-xl:hidden" style={{ width: "160px" }}></div>{" "}
        {/* To center my grow dir */}
      </div>

    </>
  );
}
