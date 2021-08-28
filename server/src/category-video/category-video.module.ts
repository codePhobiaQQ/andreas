import { Module } from '@nestjs/common';
import { CategoryVideoController } from './category-video.controller';
import { CategoryVideoService } from './category-video.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryVideoEntity } from './category-video.entity';

@Module({
  controllers: [CategoryVideoController],
  providers: [CategoryVideoService],
  imports: [TypeOrmModule.forFeature([CategoryVideoEntity])],
})
export class CategoryVideoModule {}
