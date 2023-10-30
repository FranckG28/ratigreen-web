-- CreateEnum
CREATE TYPE "Indicator" AS ENUM ('HAPPY', 'ENJOYMENT', 'MONEY');

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Choice" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,
    "indicatorCoefficientId" INTEGER NOT NULL,

    CONSTRAINT "Choice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndicatorCoefficient" (
    "id" SERIAL NOT NULL,
    "indicator" "Indicator" NOT NULL,
    "coefficient" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "IndicatorCoefficient_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_indicatorCoefficientId_fkey" FOREIGN KEY ("indicatorCoefficientId") REFERENCES "IndicatorCoefficient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
