import { VideoUpploadDto } from './dto/videoUppload.dto';
import { VideoService } from './video.service';
export declare class VideoController {
    private videoService;
    constructor(videoService: VideoService);
    addVideo(files: any, videoData: VideoUpploadDto): Promise<number>;
}
