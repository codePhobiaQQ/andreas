import { forwardRef, Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { User } from '../user/user.entity';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [
    TypeOrmModule.forFeature([Role, User]),
    forwardRef(() => UserModule),
  ],
  exports: [RoleService],
})
export class RoleModule {}
