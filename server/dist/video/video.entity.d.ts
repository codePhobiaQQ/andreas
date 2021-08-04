import { BaseEntity } from 'typeorm';
export declare class Video extends BaseEntity {
    id: number;
    link: string;
    title: string;
    preview: string;
    price: number;
    description: number;
    level: string;
}
