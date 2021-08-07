import { User } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @Column({ nullable: false })
  category: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  level: string;

  @ManyToOne(() => User, (user) => user.videos)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
