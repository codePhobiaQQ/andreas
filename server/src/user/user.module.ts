import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Role } from '../role/role.entity';
import { RoleModule } from '../role/role.module';
import { TokenModule } from 'src/token/token.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    TypeOrmModule.forFeature([User, Role]),
    forwardRef(() => RoleModule),
  ],
  exports: [UserService],
})
export class UserModule {}
