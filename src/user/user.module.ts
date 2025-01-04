import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReadUserRepository } from './repositories/read.user.repository';
import { UserRepository } from './repositories/useCase.user.repository';
import { UserController } from './user.controller';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
        collection: 'users',
      },
    ])],
  controllers: [UserController],
  providers: [
    UserService,
    ReadUserRepository,
    UserRepository,
  ],
  exports: [UserService],
})
export class UserModule {}
