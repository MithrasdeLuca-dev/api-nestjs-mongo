export const AuthLoginMessages = {
  USER_LOGIN_OR_EMAIL_NOT_FOUND: 'E-mail e/ou senha são inválidos.',
  USER_LOGIN_AUTHENTICATE: 'Login realizado com sucesso.',

  TOKEN_IS_NECESSARY: 'É necessário enviar um token para o logout.',

  VALID_TOKEN: 'Retorna se o token é válido.',

  EMAIL_NOT_VALID:
    'O e-mail informado é inválido. Informe um e-mail no formato [nome@domínio.com].',

  USER_LOGOUT: 'Logout realizado com sucesso.',

  AUTHENTICATION_REQUEST_BAD_SUCCESS: 'Invalid token, please login again.',
  AUTHENTICATION_INCORRECT_ORDER_EXCEPTION: 'No token provided.',

  REFRESH_TOKEN: 'Atualiza a sessão do usuário.',

  VALIDATION_TOKEN: 'Valida o token de acesso gerado pelo login.',

  PASSWORD_CHANGE_IS_REQUIRED: 'Senha precisa ser alterada!',

  ERROR_LOGIN: 'Erro ao efetuar o login.',
};

export const SwaggerAuthLoginMessages = {
  WHAT_IS_SWAGGER:
    'O Swagger (aka OpenApi) é uma biblioteca muito conhecida no universo backend, estando disponível para diversas linguagens e frameworks.' +
    '\n\nEla gera um site interno no seu backend que descreve, com muitos detalhes, cada endpoint e estrutura de entidades presentes na sua aplicação.' +
    '\n\nPara consumir a API, é necessário fazer login na Tag Auth usando o endpoint - api/auth/login.',

  CONSUMING_THE_API_BY_SWAGGER:
    'Para acessar endpoints protegidos o login é necessário e irá gerar um refreshToken que será salvo via cookies, é necessário incluir os cookies nas requisições.',
};
