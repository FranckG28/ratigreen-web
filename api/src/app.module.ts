import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { ConfigModule } from '@nestjs/config';
import { QuestionsModule } from './questions/questions.module';
import { ChoicesModule } from './choices/choices.module';

@Module({
  imports: [
    QuestionModule,
    ConfigModule.forRoot(),
    QuestionsModule,
    ChoicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
