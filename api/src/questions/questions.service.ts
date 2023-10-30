import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}

  async createQuestion(data: CreateQuestionDto) {
    const { choices, ...questionData } = data;

    return this.prisma.question.create({
      data: {
        ...questionData,
        choices: {
          create: choices,
        },
      },
      include: {
        choices: true,
      },
    });
  }

  async getQuestions() {
    return this.prisma.question.findMany({
      include: {
        choices: true,
      },
    });
  }

  async getQuestion(id: number) {
    return this.prisma.question.findUnique({
      where: { id },
      include: {
        choices: true,
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
    return this.prisma.question.delete({
      where: { id },
    });
  }
}
