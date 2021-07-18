import { forwardRef, Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { Token } from './token.entity';

@Module({
  providers: [TokenService],
  controllers: [],
  imports: [TypeOrmModule.forFeature([User, Token]), JwtModule.register({})],
  exports: [TokenService],
})
export class TokenModule {}
