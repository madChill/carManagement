import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScansResult } from '../../entities/scans.entity';
import { ScansResultController } from './scans.controller';
import { CreateScansResultDtoService } from './scans.service';

@Module({
  imports: [TypeOrmModule.forFeature([ScansResult])],
  providers: [CreateScansResultDtoService],
  controllers: [ScansResultController],
})
export class ScansResultModule {}
