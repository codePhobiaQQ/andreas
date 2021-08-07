import { BaseEntity } from 'typeorm';
export declare class Video extends BaseEntity {
    id: number;
    video: string;
    title: string;
    preview: string;
    bigImg: string;
    price: number;
    category: string;
    description: string;
    level: string;
}
