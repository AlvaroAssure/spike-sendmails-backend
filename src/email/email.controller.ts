// src/email/email.controller.ts
import { Body, Controller, Post, Get } from '@nestjs/common';
import { SendEmailDto } from './dto/send-email.dto/send-email.dto';
import { EmailService } from './email.service';
import * as nodemailer from 'nodemailer';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  async sendEmail(@Body() sendEmailDto: SendEmailDto) {
    await this.emailService.sendEmail(sendEmailDto);
  }
  @Get()
  getHello(): string {
    return this.emailService.getHello();
  }
}

