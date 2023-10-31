import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateIndicatorCoefficientDto } from './create-indicator-coefficient.dto';

export class CreateChoiceDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @ValidateNested({ each: true }) //  decorator tells class-validator to validate each object in the array.
  @Type(() => CreateIndicatorCoefficientDto)
  indicatorCoefficients: CreateIndicatorCoefficientDto[];
}
