import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpMessagesError } from 'src/common/messages/common.messages.http';
import { UserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../user.schema';

interface DataPassword {
  id: string;
  password: string;
  changePassword: boolean;
}

@Injectable()
export class UserRepository {
	@InjectModel(User.name) private readonly userModel: Model<User>;

	async create(userData:UserDto, hashPassword:string) {
	  const createUser = new this.userModel({
	    ...userData,
	    password: hashPassword,
	  });

	  if (!createUser) {
	    throw new HttpException(HttpMessagesError.INTERNAL_SERVER_ERROR_EXCEPTION, HttpStatus.INTERNAL_SERVER_ERROR);
	  }
	  return createUser.save();
	}

	async update(userData:UpdateUserDto, id:string){
	  await this.userModel.findByIdAndUpdate(id, {
	    ...userData,
	    updatedAt: new Date(),
	  });
	  const user = await this.userModel.findById(id);
	  return user;
	}

	async updatePassword(dataPassword:DataPassword) {
	  await this.userModel.findByIdAndUpdate(dataPassword.id, {
	    ...dataPassword,
	    updatedAt: new Date(),
	  });
	}

	async updateStatus(status:boolean, id:string){
	  await this.userModel.findByIdAndUpdate(id, {
	    status,
	    updatedAt: new Date(),
	  });
	}

	async delete(id: string) {
	  const User = await this.userModel.findByIdAndDelete(id);
	  return User;
	}
}
