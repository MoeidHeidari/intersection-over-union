/**
 * Author Moeid Heidari
 * Date 12 May 2022
 */
import morgan from 'morgan';
import { NestFactory } from '@nestjs/core';
import { SeederModule } from './infrastructure/modules/seeder.module';

async function bootstrap() {
  // Http Server
  const app = await NestFactory.create(SeederModule);

  app.use(morgan('dev'));

  await app.init();
}

bootstrap();
