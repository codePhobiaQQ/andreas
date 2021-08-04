import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Video extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  link: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true })
  preview: string;

  @Column({ nullable: true })
  bigImg: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  level: string;
}
