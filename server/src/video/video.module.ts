import { Module } from '@nestjs/common';
import { VideoController } from './video.controller';
import { VideoService } from './video.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from './video.entity';
import { FileModule } from '../file/file.module';
import { User } from '../user/user.entity';
import { TokenModule } from '../token/token.module';

@Module({
  controllers: [VideoController],
  providers: [VideoService],
  imports: [TypeOrmModule.forFeature([Video, User]), FileModule, TokenModule],
})
export class VideoModule {}
