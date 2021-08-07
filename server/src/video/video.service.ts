import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from './video.entity';
import { Repository } from 'typeorm';
import { VideoUpploadDto } from './dto/videoUppload.dto';
import { FileService, FileType } from '../file/file.service';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video) private videoRepository: Repository<Video>,
    private fileService: FileService,
  ) {}

  async addVideo(video, bigImg, preview, dto: VideoUpploadDto): Promise<Video> {
    try {
      const videoPath = this.fileService.createFile(FileType.VIDEO, video);
      const bigImgPath = this.fileService.createFile(FileType.IMAGE, bigImg);
      const previewPath = this.fileService.createFile(FileType.IMAGE, preview);
      const videoEl = await this.videoRepository.create({
        ...dto,
        video: videoPath,
        bigImg: bigImgPath,
        preview: previewPath,
      });
      await this.videoRepository.save(videoEl);
      return videoEl;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
