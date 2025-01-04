import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { userValidationMessagesError } from 'src/user/messages/validation.messages.user';

const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,16}$/;

@ValidatorConstraint({ name: 'ValidatePassword', async: false })
export class ValidatePassword implements ValidatorConstraintInterface {
  validate(password: string, args: ValidationArguments) {
    const generatePassword = args.object[args.constraints[0]] as boolean;

    if (password && generatePassword === false && passwordRegex.test(password)) {
      return true;
    
    }else if(generatePassword === true){
      return true;
    }

    return false;
  }

  defaultMessage(args: ValidationArguments) {
    const { value, constraints, object } = args;
    const generatePassword = object[constraints[0]] as boolean;
    const providedPassword = value as string;
    
    if (generatePassword === false && providedPassword === '') {
      return userValidationMessagesError.REGISTER_GENERATE_PASSWORD_NOT_VALID;
    }
		
    if (generatePassword === false && !passwordRegex.test(providedPassword)) {
      return userValidationMessagesError.REGISTER_PASSWORD_NOT_VALID;
    }

  }
}
