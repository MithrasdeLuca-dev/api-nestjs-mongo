import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { searchFilterQueries } from 'src/common/filters/Filters';
import { generatePassword } from 'src/common/formatted/generatePassword';
import { HttpMessagesError } from 'src/common/messages/common.messages.http';
import { ResponseMessagesError, ResponseMessagesOk } from 'src/common/messages/reponse.messages';
import { PaginationHelper } from 'src/common/querys/pagination';
import { UserDto } from './dto/create-user.dto';
import { QueryFilterUser } from './entities/QueryFilterUser';
import { userRequestMessagesError, userRequestMessagesOk } from './messages/messages.request.register';
import { ReadUserRepository } from './repositories/read.user.repository';
import { UserRepository } from './repositories/useCase.user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly readUserRepository: ReadUserRepository,
  ) { }

  async create(userDto: UserDto) {

    const existingRegistration = await this.readUserRepository.findByMail(userDto.mail);

    if (existingRegistration) {
      throw new ConflictException(null, userRequestMessagesError.REGISTER_EXIST_EMAIL_ACCOUNT);
    }
    const generateOrConvertPassword = userDto.generatePassword === true 
      ? generatePassword()
      : userDto.password;
    
    const hasPassword = await bcrypt.hash(generateOrConvertPassword,10);
    const create = await this.userRepository.create(userDto, hasPassword);

    if(!create){
      throw new InternalServerErrorException(null, HttpMessagesError.INTERNAL_SERVER_ERROR_EXCEPTION);
    }

    // const id =  create._id.toString();

    // const dataForSendingMail = {
    //   id,
    //   mail: userDto.mail,
    //   username: create.fullName,
    //   password: generateOrConvertPassword,
    // };

    // await SendPasswordResetEmailOnFirstAccess(dataForSendingMail); 
    
    return { message: userRequestMessagesOk.REGISTER_CREATED_SUCESSFULLY , create };
  }
  
  async findAll(queryFilters:QueryFilterUser) {
    const {
      page,
      limit,
    } = queryFilters;

    const searchFields = [
      'status',
      'createdAt',
      'updatedAt',
    ];

    const filters = searchFilterQueries(searchFields, queryFilters);

    const listAll = await this.readUserRepository.findAll(filters);

    if (listAll.length === 0) {
      throw new NotFoundException(null, userRequestMessagesError.REGISTERS_EMPTY);
    }

    const list = PaginationHelper(listAll, page, limit);

    return list;
  }
  
  async findOne(id: string) {
    const user = await this.readUserRepository.findOne(id);

    if (!user) {
      throw new BadRequestException(null, userRequestMessagesError.REGISTER_NOT_EXISIT_DATABASE);
    }

    return user;
  }
  
  async update(updateUserDto: UserDto, id: string) {
    const existingRegistration = await this.readUserRepository.findOne(id);
    if (!existingRegistration) {
      throw new NotFoundException(null, ResponseMessagesError.REGISTER_NOT_EXISTING);
    }

    const update = await this.userRepository.update(updateUserDto, id);
    return { message: ResponseMessagesOk.REGISTER_DATA_PUT_OK, update };
  }
  
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
