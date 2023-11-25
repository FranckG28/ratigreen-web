import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Res,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Logger } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/questions')
export class QuestionsController {
  private readonly logger = new Logger(QuestionsController.name);

  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  async create(@Body() createQuestionDto: CreateQuestionDto, @Res() res) {
    try {
      const createdQuestion =
        await this.questionsService.createQuestion(createQuestionDto);
      this.logger.log('Question created successfully');
      return res.status(200).send({
        id: createdQuestion.id,
        message: 'Question created successfully',
      });
    } catch (e) {
      this.logger.error(e);
      res.status(400).send('An error occured while creating the question');
    }
  }

  @Post('upload/:id')
  @UseInterceptors(FileInterceptor('image'))
  createImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
    @Res() res,
  ) {
    try {
      const filename = file.filename;
      this.questionsService.addImage(Number(id), filename);
      this.logger.log('Image uploaded successfully');
      return res.status(200).send('Image uploaded successfully');
    } catch (e) {
      this.logger.error(e);
      res.status(400).send('An error occured while uploading the image');
    }
  }

  @Get('image/:imagePath')
  getImage(@Param('imagePath') image: string, @Res() res) {
    try {
      res.setHeader('Content-Type', 'image/jpeg');
      this.logger.log('Image retrieved successfully');
      return res.status(200).sendFile(image, { root: 'uploads' });
    } catch (e) {
      this.logger.error(e);
      res.status(400).send('An error occured while retrieving the image');
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
