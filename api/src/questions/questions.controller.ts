import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Res,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Logger } from '@nestjs/common';

@Controller('api/questions')
export class QuestionsController {
  private readonly logger = new Logger(QuestionsController.name);

  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto, @Res() res) {
    try {
      this.questionsService.createQuestion(createQuestionDto);
      this.logger.log('Question created successfully');
      res.status(200).send('Question created successfully');
    } catch (e) {
      this.logger.error(e);
      res.status(400).send('An error occured while creating the question');
    }
  }

  @Get()
  findAll() {
    return this.questionsService.getQuestions();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionsService.getQuestion(+id);
  }

  @Put(':id')
  updateFull(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionsService.updateQuestion(+id, updateQuestionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res) {
    try {
      await this.questionsService.deleteQuestion(+id);
      this.logger.log('Question deleted');
      res.status(200).send('Question deleted');
    } catch (e) {
      this.logger.error(e);
      res.status(404).send("A question with this id doesn't exist");
    }
  }
}
