import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class EmailExceptionFilter implements ExceptionFilter {
  constructor(private readonly transporter: any) {} // Reemplaza 'any' con el tipo adecuado para el transportador de nodemailer

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // Maneja la excepción de correo electrónico aquí
    console.error('Error al enviar el correo electrónico:', exception);

    // Envía una respuesta de error apropiada al cliente
    response.status(500).json({
      message: 'Ocurrió un error al enviar el correo electrónico',
    });
  }
}
