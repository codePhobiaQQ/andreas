import { Body, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer';
import { VideoUpploadDto } from './dto/videoUppload.dto';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private videoService: VideoService) {}

  @Post('add')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'video', maxCount: 1 },
      { name: 'bigImg', maxCount: 1 },
      { name: 'preview', maxCount: 1 },
    ]),
  )
  addVideo(@UploadedFiles() files, @Body() videoData: VideoUpploadDto) {
    const { video, bigImg, preview } = files;
    const afterAddVideo = this.videoService.addVideo(
      video[0],
      bigImg[0],
      preview[0],
      videoData,
    );
    return afterAddVideo;
  }
}
