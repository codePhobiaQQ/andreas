import { Video } from './video.entity';
import { Repository } from 'typeorm';
import { VideoUpploadDto } from './dto/videoUppload.dto';
import { FileService } from '../file/file.service';
export declare class VideoService {
    private videoRepository;
    private fileService;
    constructor(videoRepository: Repository<Video>, fileService: FileService);
    addVideo(video: any, bigImg: any, preview: any, dto: VideoUpploadDto, userId: any): Promise<Video>;
    getAll(): Promise<Video[]>;
}
