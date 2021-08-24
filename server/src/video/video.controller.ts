import {
  Body,
  Get,
  Post,
  Query,
  Req,
  Res,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { Controller } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer';
import {
  GetAmountVideoDto,
  GetOneVideoDto,
  VideoUpploadDto,
} from './dto/videoUppload.dto';
import { VideoService } from './video.service';
import { TokenService } from '../token/token.service';
import { RoleGuard } from '../role/role.guard';
import { Role } from '../role/role.decorator';
import { Video } from './video.entity';

@Controller('video')
// @UseGuards(RoleGuard)
export class VideoController {
  constructor(
    private videoService: VideoService,
    private tokenService: TokenService,
  ) {}

  @Post('add')
  // @Role(['admin', 'creator'])
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
  // @Role(['user', 'admin', 'creator'])
  async getAllVideo() {
    const videos = await this.videoService.getAll();
    console.log(videos);
    return videos;
  }

  @Get('find-by-id')
  async findById(@Query() findData: GetOneVideoDto): Promise<Video> {
    const video = await this.videoService.findById(findData.id);
    return video;
  }

  // @Get('get-amount')
  // async getAmount(@Query() findData: GetAmountVideoDto): Promise<Video[]> {
  //   const video = await this.videoService.getAmount(
  //     findData.count,
  //     findData.page,
  //   );
  //   return video;
  // }
}
