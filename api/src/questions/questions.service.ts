import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}

  async createQuestion(data: CreateQuestionDto) {
    if (!data.choices || data.choices.length !== 2) {
      throw new BadRequestException('A question must have exactly 2 choices');
    }

    return this.prisma.question.create({
      data: {
        title: data.title,
        answer: data.answer,
        choices: {
          create: data.choices.map((choice) => ({
            text: choice.text,
            indicatorCoefficients: {
              create: choice.indicatorCoefficients.map(
                (indicatorCoefficient) => ({
                  indicator: indicatorCoefficient.indicator,
                  coefficient: indicatorCoefficient.coefficient,
                }),
              ),
            },
          })),
        },
      },
      include: {
        choices: {
          include: {
            indicatorCoefficients: true,
          },
        },
      },
    });
  }

  async getQuestions() {
    return this.prisma.question.findMany({
      include: {
        choices: {
          include: {
            indicatorCoefficients: true,
          },
        },
      },
    });
  }

  /**
   * Get a question by id
   * @param id The id of the question
   * @returns A Question entity with its choices and indicator coefficients
   */
  async getQuestion(id: number) {
    return this.prisma.question.findUnique({
      where: { id },
      include: {
        choices: {
          include: {
            indicatorCoefficients: true,
          },
        },
      },
    });
  }

  async updateQuestion(id: number, data: UpdateQuestionDto) {
    return this.prisma.question.update({
      where: { id },
      data,
      include: {
        choices: true,
      },
    });
  }

  async deleteQuestion(id: number) {
    try {
      // get all the choices of the question
      const choices = await this.prisma.choice.findMany({
        where: {
          questionId: id,
        },
      });

      // delete all the indicator coefficients of the choices
      await Promise.all(
        choices.map((choice) =>
          this.prisma.indicatorCoefficient.deleteMany({
            where: {
              choiceId: choice.id,
            },
          }),
        ),
      );

      // delete all the choices of the question
      await this.prisma.choice.deleteMany({
        where: {
          questionId: id,
        },
      });

      return this.prisma.question.delete({
        where: { id },
      });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
