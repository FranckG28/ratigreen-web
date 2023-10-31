import { IsNotEmpty, IsNumber, IsEnum } from 'class-validator';
import { Indicator } from '../entities/indicator.entity';

export class CreateIndicatorCoefficientDto {
  @IsNotEmpty()
  @IsEnum(Indicator)
  indicator: Indicator;

  @IsNotEmpty()
  @IsNumber()
  coefficient: number;
}
