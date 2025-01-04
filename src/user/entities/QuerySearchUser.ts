import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QuerySearchUser {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  	fullName?: string;
}
