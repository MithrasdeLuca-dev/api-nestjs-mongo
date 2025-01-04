export const generatePassword = () => {
  const minLength = 8;
  const maxLength = 12;
  const requiredCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$&*%';

  const passwordArray = [];
  const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  // Garante que haja pelo menos um número na senha
  const randomNumber = '0123456789';
  const randomDigit = randomNumber.charAt(Math.floor(Math.random() * randomNumber.length));
  passwordArray.push(randomDigit);

  // Garante que haja pelo menos um caractere especial na senha
  const specialCharacters = '!@#$&*%';
  const randomSpecialChar = specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
  passwordArray.push(randomSpecialChar);

  // Preenche o restante da senha com caracteres aleatórios
  for (let i = 2; i < passwordLength; i++) {
    const randomChar = requiredCharacters.charAt(Math.floor(Math.random() * requiredCharacters.length));
    passwordArray.push(randomChar);
  }

  // Embaralha a senha para que os caracteres estejam em ordem aleatória
  for (let i = passwordLength - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
  }

  const password = passwordArray.join('');
  return password;
};
