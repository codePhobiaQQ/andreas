import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function start() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors();
  await app.listen(process.env.PORT || 5000, () => {
    console.log(`server is working on PORT = ${process.env.PORT}`);
  });
}
start();