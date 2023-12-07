import { DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

export const options: SwaggerDocumentOptions = {
  operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
};

export const swaggerConfig = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('Cats example')
  .setDescription('The Nest API description')
  .setVersion('1.0')
  .addTag('myApp')
  .build();
