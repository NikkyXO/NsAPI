import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The Nest API description')
  .setVersion('1.0')
  .addTag('myApp')
  .build();
