import { IsBoolean } from 'class-validator';

export class UpdateStatusDto {
  /**
  * @example "true"
  */
  @IsBoolean()
  	status: boolean;
}