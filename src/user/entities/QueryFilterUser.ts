import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryFilterUser {

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  	page?: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  	limit?: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  	status?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  	createdAt?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  	updatedAt?: string;
}
