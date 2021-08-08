import {
  Body, Get,
  Post,
  Req,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { Controller } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer';
import { VideoUpploadDto } from './dto/videoUppload.dto';
import { VideoService } from './video.service';
import { TokenService } from '../token/token.service';

@Controller('video')
export class VideoController {
  constructor(
    private videoService: VideoService,
    private tokenService: TokenService,
  ) {}

  @Post('add')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'video', maxCount: 1 },
      { name: 'bigImg', maxCount: 1 },
      { name: 'preview', maxCount: 1 },
    ]),
  )
  async addVideo(
    @UploadedFiles() files,
    @Body() videoData: VideoUpploadDto,
    @Req() request: Request,
    @Res() response: Response,
  ) {
    const user = await this.tokenService.validateAccessToken(
      request.headers.authorization.split(' ')[1],
    );
    const userId = user.id;
    const { video, bigImg, preview } = files;
    const afterAddVideo = await this.videoService.addVideo(
      video[0],
      bigImg[0],
      preview[0],
      videoData,
      userId,
    );
    return response.json(afterAddVideo);
  }

  @Get('get-all')
  getAllVideo() {
    return this.videoService.getAll();
  }
}
