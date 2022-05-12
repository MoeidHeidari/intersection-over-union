/**
 * Author Moeid Heidari
 * Date 12 May 2022
 */
import morgan from 'morgan';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './infrastructure/modules/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  // Http Server
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
    }),
  );

  try {
    const configService = app.get(ConfigService);
    const NODE_PORT = configService.get('NODE_PORT');
    if (!NODE_PORT) {
      throw new Error("Please define the node port as an environmental variable \n You can use Export NODE_PORT={port} or define a .env file");
    }
    await app.listen(NODE_PORT,
      () => Logger.log('HTTP Service is listening on port ' + String(NODE_PORT), 'App'));
  } catch (error) {
    console.log(error);
    
    return;
  }


}

bootstrap();
