import { IsNotEmpty, IsString } from 'class-validator';
import { AuthLoginMessages } from '../messages/AuthMessages';

export class AuthLogoutDTO {
  /**
   * O token é necessário para oencerrar a sessão.
   * @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiR0VTVE9SIiwidXNlcm5hbWUiOiJTWVNBRE1JTiBTWVNBRE1JTiIsImFjY2Vzc1Byb2ZpbGUiOiJTWVNBRE1JTiIsInVzZXJJZCI6IjY1MDA5MTMyMGFmNWVlODYwMDVhMzhhZSIsImlhdCI6MTY5NDYzNTk3NywiZXhwIjoxNjk0NjM1OTg3fQ.nCkop2QmFguIwWAoprBK6Zoq2luXmZ_AHjaB7go7xX4"
   */
  @IsString()
  @IsNotEmpty({ message: AuthLoginMessages.TOKEN_IS_NECESSARY })
    token: string;
}
