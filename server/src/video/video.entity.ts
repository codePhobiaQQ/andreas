import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Video extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  link: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  preview: string;

  @Column({ nullable: true })
  price: number;

  @Column({ nullable: true })
  description: number;

  @Column({ nullable: true })
  level: string;
}
