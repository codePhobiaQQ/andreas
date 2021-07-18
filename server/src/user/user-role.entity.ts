// import {
//   Entity,
//   Column,
//   OneToOne,
//   JoinColumn,
//   PrimaryColumn,
//   PrimaryGeneratedColumn,
// } from 'typeorm';
// import { User } from './user.entity';
// import { Role } from '../role/role.entity';
//
// @Entity()
// export class UserRole {
//   @PrimaryGeneratedColumn()
//   id: number;
//
//   @PrimaryColumn('int') userId: number;
//
//   @PrimaryColumn('int') roleId: number;
//
//   @OneToOne(() => User)
//   @JoinColumn()
//   user: User;
//
//   @OneToOne(() => Role)
//   @JoinColumn()
//   role: Role;
// }
