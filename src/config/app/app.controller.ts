import { Controller, Get } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { ApiHeadersSwagger } from 'src/common/decorators/ApiHeaderSwagger';
import { AppService } from './app.service';

@ApiHeadersSwagger()
@ApiTags('Status')
@Controller('status')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
