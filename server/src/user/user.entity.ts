import { Token } from 'src/token/token.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../role/role.entity';
import { Video } from '../video/video.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ default: false })
  banned: boolean;

  @Column({ nullable: true })
  banReason: string;

  @Column({ default: false })
  isActive: boolean;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles: Role[];

  @OneToOne(() => Token)
  @JoinTable()
  token: Token;

  @OneToMany('Video', (video: Video) => video.user, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  videos: Video[];
}
