import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders:
      'Access-Control-Allow-Origin, Content-Type, Accept, Authorization, X-Requested-With, Origin',
  });
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
