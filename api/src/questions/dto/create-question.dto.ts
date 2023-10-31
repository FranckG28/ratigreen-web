// CreateQuestionDto.ts
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateChoiceDto } from './create-choice.dto';

/**
 * The CreateQuestionDto class is used to validate the data that will be used to create a new question.
 */
export class CreateQuestionDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  /**
   * The choices property should be an array of CreateChoiceDto instances,
   * and each of these instances should be validated according to the rules defined in the CreateChoiceDto class
   */
  @ValidateNested({ each: true })
  @Type(() => CreateChoiceDto)
  choices: CreateChoiceDto[];

  @IsNotEmpty()
  @IsString()
  answer: string;
}
