import "reflect-metadata";
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { configSwagger } from './swagger/SwaggerDocumentOptions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('People example')
    .setDescription('The People API description')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config, configSwagger);
  SwaggerModule.setup('docs/swagger', app, document);

  await app.listen(3000);
}
bootstrap();

