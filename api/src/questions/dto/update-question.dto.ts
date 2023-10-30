/*
 * export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {}
 * We don't use the PartialType of CreateQuestionDto because we want to be able to update the answer property of the question
 * and not update the choices as well.
 */

import { IsOptional, IsString } from 'class-validator';

export class UpdateQuestionDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  answer?: string;
}
