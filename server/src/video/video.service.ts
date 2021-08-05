import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from './video.entity';
import { Repository } from 'typeorm';
import {VideoUpploadDto} from "./dto/videoUppload.dto";

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video) private videoRepository: Repository<Video>,
  ) {}

  async addVideo(video, bigImg, preview, dto: VideoUpploadDto) {
    return 0;
  }
}
