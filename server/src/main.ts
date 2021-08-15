import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';

async function start() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(express.urlencoded({ extended: true, limit: '5mb' }));
  app.use(express.json({ limit: '5mb' }));
  app.enableCors({
    origin: ['http://localhost:3000', 'https://testing.nikitin-sergei.ru'],
    credentials: true,
  });
  app.use(cookieParser());
  await app.listen(process.env.PORT || 5000, () => {
    console.log(`server is working on PORT = ${process.env.PORT}`);
  });
}
start();
