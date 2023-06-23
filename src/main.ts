import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as nodemailer from 'nodemailer';
import { EmailExceptionFilter } from './email-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
