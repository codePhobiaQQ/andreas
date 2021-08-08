import { Response, Request } from 'express';
import { VideoUpploadDto } from './dto/videoUppload.dto';
import { VideoService } from './video.service';
import { TokenService } from '../token/token.service';
export declare class VideoController {
    private videoService;
    private tokenService;
    constructor(videoService: VideoService, tokenService: TokenService);
    addVideo(files: any, videoData: VideoUpploadDto, request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
    getAllVideo(): Promise<import("./video.entity").Video[]>;
}
