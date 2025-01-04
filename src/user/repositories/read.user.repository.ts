import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { searchQueries } from 'src/common/querys/querySearch';
import { QueryFilterUser } from '../entities/QueryFilterUser';
import { User } from '../user.schema';

@Injectable()
export class ReadUserRepository {
	@InjectModel(User.name) private readonly userModel: Model<User>;

	public async findAll(filters:QueryFilterUser) {
	    const showUsers = await this.userModel.find(filters);
	    return showUsers;
	}

	public async findOne(id: string) {
	    const user = await this.userModel.findById(id);
	    return user;
	}

	public async getByName(fieldsToSearch: string[], user: string) {
	    const searchUser = searchQueries(fieldsToSearch, user);
	    const users = await this.userModel.find(searchUser);
	    return users;
	}

	public async findByMail(mail: string){
	    const user = await this.userModel.findOne({ mail }).exec();
	    	return user ;
	}
}
