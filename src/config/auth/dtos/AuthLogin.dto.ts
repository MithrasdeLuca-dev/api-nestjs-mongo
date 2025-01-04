import { IsNotEmpty, IsString } from 'class-validator';
import { AuthLoginMessages } from '../messages/AuthMessages';
export class AuthLoginDTO {
  /**
   * O e-mail é necessário para o login, mas não necessariamente precisa ser o mesmo e-mail da
   * rede social que estiver conectada. Login sem rede social precisa de uma senha.
   * @example "teste@email.com"
   */
  @IsString()
  @IsNotEmpty({ message: AuthLoginMessages.USER_LOGIN_OR_EMAIL_NOT_FOUND })
    email: string;

  /**
   * Senha usada para logar na plataforma.
   * * é necessário informar uma senha.
   * @example "1234@Test"
   */
  @IsString()
  @IsNotEmpty({ message: AuthLoginMessages.USER_LOGIN_OR_EMAIL_NOT_FOUND })
    password: string;
}
