import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { RoleModule } from '../role/role.module';
import { Role } from '../role/role.entity';
import { Token } from '../token/token.entity';
import { TokenModule } from '../token/token.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    TypeOrmModule.forFeature([User, Role, Token]),
    UserModule,
    RoleModule,
    TokenModule,
  ],
  exports: [AuthService],
})
export class AuthModule {}
