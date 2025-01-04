import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, Length, Matches, Validate } from 'class-validator';
import { RoleTypePermission } from 'src/config/auth/enum/UserType.enum';
import { userValidationMessagesError } from '../messages/validation.messages.user';
import { ValidatePassword } from './ValidatePassword.dto';

const fullNameRegex = /^([A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ][a-záàâãéèêíïóôõöúçñ']*[\s']?(de|do|da|dos|das)?[\s']?)+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ][a-záàâãéèêíïóôõöúçñ']*$/;

export class UserDto {

  @ApiProperty({
    description: 'Nome completo do usuário.',
    example: 'Nome Nome',
    minLength: 2,
    maxLength: 50,
  })
  @Length(2, 50, { message: userValidationMessagesError.REGISTER_NAME_NOT_VALID_LENGTH })
  @Matches(fullNameRegex, { message: userValidationMessagesError.REGISTER_NAME_NOT_VALID })
  @IsNotEmpty({ message: userValidationMessagesError.REGISTER_NAME_NOT_EMPTY })
    fullName: string;

  @IsEnum(RoleTypePermission, { message: userValidationMessagesError.REGISTER_ROLE_PERMISSION_NOT_VALID})
  @IsNotEmpty({ message: userValidationMessagesError.REGISTER_ROLE_PERMISSION_NOT_VALID })
    rolePermission: string;

  @ApiProperty({
    description: 'O e-mail é necessário para o login, mas não necessariamente precisa ser o mesmo e-mail da rede social que estiver conectada. Login sem rede social precisa de uma senha.',
    example: 'email@email.com',
  })
  @IsEmail({}, { message: userValidationMessagesError.REGISTER_EMAIL_NOT_VALID })
  @IsNotEmpty({ message: userValidationMessagesError.REGISTER_EMAIL_NOT_EMPTY })
    mail: string;

  @ApiProperty({
    description: 'Senha usada para logar na plataforma. É necessário informar uma senha.',
    example: '1234@Test',
  })
  @Validate(ValidatePassword, ['generatePassword'])
    password: string;

  @ApiProperty({
    description: 'É necessário marcar a caixa caso a senha não seja fornecida.',
    example: true,
  })
  @IsNotEmpty({ message: userValidationMessagesError.REGISTER_GENERATE_PASSWORD_NOT_VALID })
    generatePassword: boolean;
}