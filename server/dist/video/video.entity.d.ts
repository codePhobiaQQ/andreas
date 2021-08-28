import { User } from 'src/user/user.entity';
import { BaseEntity } from 'typeorm';
import { CategoryVideoEntity } from '../category-video/category-video.entity';
export declare class Video extends BaseEntity {
    id: number;
    video: string;
    title: string;
    preview: string;
    bigImg: string;
    price: number;
    description: string;
    level: string;
    user: User;
    CategoryVideo: CategoryVideoEntity[];
}
