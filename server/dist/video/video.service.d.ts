import { Video } from './video.entity';
import { Repository } from 'typeorm';
import { VideoUpploadDto } from "./dto/videoUppload.dto";
export declare class VideoService {
    private videoRepository;
    constructor(videoRepository: Repository<Video>);
    addVideo(video: any, bigImg: any, preview: any, dto: VideoUpploadDto): Promise<number>;
}
