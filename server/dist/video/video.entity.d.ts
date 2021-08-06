import { BaseEntity } from 'typeorm';
export declare class Video extends BaseEntity {
    id: number;
    video: string;
    title: string;
    preview: string;
    bigImg: string;
    price: number;
    description: string;
    level: string;
}
