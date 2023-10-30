import { IsString, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class CreateChoiceDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsNotEmpty()
  indicatorCoefficientId: number;
}

/**
 * The CreateQuestionDto class is used to validate the data that will be used to create a new question.
 */
export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  /**
   * The choices property should be an array of CreateChoiceDto instances,
   * and each of these instances should be validated according to the rules defined in the CreateChoiceDto class
   */
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateChoiceDto)
  choices: CreateChoiceDto[];

  @IsString()
  @IsNotEmpty()
  answer: string;
}
