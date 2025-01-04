import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './config/app/app.module';
import { formatErrorPipe } from './config/formatted/NestJsFormattedErrorsHelper';
import { SwaggerAuthLoginMessages } from './config/swagger/swagger.messages';

const port = process.env.PORT_BACKEND || 3005;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['debug', 'error', 'log', 'warn'],
  });

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Documentação com Swagger - Study-ERP')
    .setDescription(SwaggerAuthLoginMessages.WHAT_IS_SWAGGER)
    .addSecurity('bearer', {
      type: 'http',
      scheme: 'bearer',
    })
    .setVersion('1.0')
    .addTag('Status')
    .addTag('User')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.enableCors();

  app.useGlobalPipes(formatErrorPipe);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port, function () {
    console.log(`BACKEND is running on port ${port}.`);
  });
}
bootstrap();
