-- CreateTable
CREATE TABLE "Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "answer" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Indicator" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Choice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,
    "indicatorCoefficientId" INTEGER NOT NULL,
    CONSTRAINT "Choice_indicatorCoefficientId_fkey" FOREIGN KEY ("indicatorCoefficientId") REFERENCES "IndicatorCoefficient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Choice_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "IndicatorCoefficient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "indicatorId" INTEGER NOT NULL,
    "coefficient" REAL NOT NULL,
    CONSTRAINT "IndicatorCoefficient_indicatorId_fkey" FOREIGN KEY ("indicatorId") REFERENCES "Indicator" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Indicator_title_key" ON "Indicator"("title");
