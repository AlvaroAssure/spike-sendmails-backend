// src/email/email.service.ts
import { Injectable } from '@nestjs/common';
import { SendEmailDto } from './dto/send-email.dto/send-email.dto';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  async sendEmail(sendEmailDto: SendEmailDto) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ionos.com',
      port: 25,
      secure: false,
      auth: {
        user: 'alvaro.flores@assuresoftbolivia.com',
        pass: '#71uIp*F@z',
      },
    });

    const mailOptions = {
      from: 'alvaro.flores@assuresoftbolivia.com',
      to: sendEmailDto.to,
      subject: sendEmailDto.subject,
      text: sendEmailDto.message,
    };
    console.log(mailOptions);
    
    await transporter.sendMail(mailOptions);
  }

  getHello(): string {
    return 'Hello World!';
  }

}
