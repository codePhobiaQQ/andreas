import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
