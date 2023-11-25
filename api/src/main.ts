import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cors from 'cors';
import { CustomValidationPipe } from './pipes/custom-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Ratisexe')
    .setDescription(
      'With Ratisexe API you can create and manage your questions.',
    )
    .setVersion('1.0')
    .addTag('ratisexe')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new CustomValidationPipe());

  app.use(cors()); // Enable CORS

  await app.listen(3001);
}
bootstrap();
