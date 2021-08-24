import { Response, Request } from 'express';
import { GetOneVideoDto, VideoUpploadDto } from './dto/videoUppload.dto';
import { VideoService } from './video.service';
import { TokenService } from '../token/token.service';
import { Video } from './video.entity';
export declare class VideoController {
    private videoService;
    private tokenService;
    constructor(videoService: VideoService, tokenService: TokenService);
    addVideo(files: any, videoData: VideoUpploadDto, request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
    getAllVideo(): Promise<Video[]>;
    findById(findData: GetOneVideoDto): Promise<Video>;
}
