import { Token } from 'src/token/token.entity';
import { BaseEntity } from 'typeorm';
import { Role } from '../role/role.entity';
import { Video } from '../video/video.entity';
import { Blog } from '../blog/blog.entity';
export declare class User extends BaseEntity {
    id: number;
    email: string;
    password: string;
    name: string;
    avatar: string;
    banned: boolean;
    banReason: string;
    isActive: boolean;
    roles: Role[];
    token: Token;
    videos: Video[];
    blogs: Blog[];
}
