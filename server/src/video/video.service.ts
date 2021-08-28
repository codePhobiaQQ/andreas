import { HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';
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

  async addVideo(
    video,
    bigImg,
    preview,
    dto: VideoUpploadDto,
    userId,
  ): Promise<Video> {
    try {
      const videoPath = this.fileService.createFile(FileType.VIDEO, video);
      const bigImgPath = this.fileService.createFile(FileType.IMAGE, bigImg);
      const previewPath = this.fileService.createFile(FileType.IMAGE, preview);
      const videoEl = await this.videoRepository.create({
        ...dto,
        video: videoPath,
        bigImg: bigImgPath,
        preview: previewPath,
        user: userId,
      });
      await this.videoRepository.save(videoEl);
      return videoEl;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAll(): Promise<Video[]> {
    try {
      const videos = await this.videoRepository.find({
        relations: ['CategoryVideo'],
      });
      return videos;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // async getAmount(count: number, page: number): Promise<Video[]> {
  //   try {
  //     const video = await this.videoRepository.find({ where: { id },  });
  //     console.log(video);
  //     return video;
  //   } catch (e) {
  //     throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
  //   }
  // }

  async findById(id: number): Promise<Video> {
    try {
      const video = await this.videoRepository.findOne({ where: { id } });
      console.log(video);
      return video;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
