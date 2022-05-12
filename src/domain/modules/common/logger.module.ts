/**
 * Author Moeid Heidari
 * Date 12 May 2022
 */
import { Module } from '@nestjs/common';
import { LoggerService } from '../../services/common';

@Module({
  providers: [LoggerService, String],
  exports: [LoggerService],
})
export class LoggerModule {}
