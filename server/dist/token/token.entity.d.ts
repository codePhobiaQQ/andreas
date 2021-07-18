import { BaseEntity } from 'typeorm';
export declare class Token extends BaseEntity {
    id: number;
    userId: number;
    refreshToken: string;
}
