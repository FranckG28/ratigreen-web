import {
  BadRequestException,
  Logger,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';

/**
 * Custom validation pipe that returns a BadRequestException with a detailed error message
 * instead of a generic BadRequestException
 */
export class CustomValidationPipe extends ValidationPipe {
  private readonly logger = new Logger(CustomValidationPipe.name);

  createExceptionFactory() {
    return (validationErrors: ValidationError[] = []) => {
      if (this.isDetailedOutputDisabled) {
        return new BadRequestException();
      }
      const messages = validationErrors.map((error) => ({
        property: error.property,
        constraints: error.constraints,
      }));
      this.logger.error(messages);
      return new BadRequestException(messages);
    };
  }
}
