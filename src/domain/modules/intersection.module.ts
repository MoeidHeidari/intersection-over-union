import { Module } from '@nestjs/common';
import { CommonModule } from '../../infrastructure/modules/common/common.module';
import { IntersectionController } from '../../application/controllers';
import { IntersectionService } from '../services/intersection.service';
import { LoggerService } from '../services/common';
/**
 * User module
 */
@Module({
  imports: [CommonModule],
  controllers: [IntersectionController],
  providers: [IntersectionService],
  exports: [IntersectionService],
})
export class IntersectionModule {}
