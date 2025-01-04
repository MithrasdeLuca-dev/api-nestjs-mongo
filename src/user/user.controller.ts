import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiHeadersSwagger } from 'src/common/decorators/ApiHeaderSwagger';
import { SwaggerMessagesResponse } from 'src/common/messages/commom.messages.swagger';
import { ResponseMessagesError, ResponseMessagesOk } from 'src/common/messages/reponse.messages';
import { UserDto } from './dto/create-user.dto';
import { QueryFilterUser } from './entities/QueryFilterUser';
import { userDescriptionSwagger, userMessagesSwagger } from './messages/messages.register.swagger';
import { userRequestMessagesError } from './messages/messages.request.register';
import { UserService } from './user.service';

@ApiHeadersSwagger()
@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({ description: ResponseMessagesOk.REGISTER_DATA_CREATE })
	@ApiConflictResponse({ description: userRequestMessagesError.REGISTER_EXIST_EMAIL_ACCOUNT })
	@ApiOperation({ description: userDescriptionSwagger.DESCRIPTION_CREATE_USER })
  @Post()
  create(@Body() UserDto: UserDto) {
    return this.userService.create(UserDto);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: SwaggerMessagesResponse.LIST_REGISTERS })
  @ApiNotFoundResponse({ description: userRequestMessagesError.REGISTERS_EMPTY })
  @ApiOperation({ description: userDescriptionSwagger.DESCRIPTION_RESPONSE_GET_FILTER })
  @Get()
  async findAll(@Query() query: QueryFilterUser) {
    return await this.userService.findAll(query);
  }
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: userMessagesSwagger.API_RESPONSE_SEARCH })
  @ApiBadRequestResponse({ description: ResponseMessagesError.REGISTERS_NOT_EXISTING_DATABASE })
  @ApiOperation({ description: SwaggerMessagesResponse.SEARCH_REGISTERS })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }
  
  // @ApiOkResponse({ description: ResponseMessagesOk.REGISTER_DATA_PUT_OK })
  // @ApiNotFoundResponse({ description: ResponseMessagesError.REGISTER_NOT_EXISTING })
  // @ApiOperation({ description: userDescriptionSwagger.DESCRIPTION_RESPONSE_UPDATE_DATA })
  // @Put(':id')
  // updateAll(@Param('id') id: string, @Body() updateUserDto: UserDto) {
  //   return this.userService.updateAll(updateUserDto);
  // }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: ResponseMessagesOk.REGISTER_DATA_PUT_PASSWORD })
	@ApiNotFoundResponse({ description: ResponseMessagesError.REGISTER_NOT_EXISTING })
  @ApiOperation({ description: userDescriptionSwagger.DESCRIPTION_RESPONSE_UPDATE_PASSWORD })
  @Patch(':id')
  update(@Param('id') @Body() updateUserDto: UserDto, id: string) {
    return this.userService.update(updateUserDto, id);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
