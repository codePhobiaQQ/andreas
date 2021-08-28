import { User } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryVideoEntity } from '../category-video/category-video.entity';

@Entity()
export class Video extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  video: string;

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

  @ManyToOne(() => User, (user) => user.videos)
  user: User;

  @ManyToMany(() => CategoryVideoEntity, (CategoryVideo) => CategoryVideo.video)
  CategoryVideo: CategoryVideoEntity[];
}
