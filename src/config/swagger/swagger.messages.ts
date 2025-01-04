export const AuthLoginMessages = {
  USER_LOGIN_OR_EMAIL_NOT_FOUND: 'E-mail e/ou senha são inválidos',
  USER_LOGIN_AUTHENTICATE: 'Autenticado com sucesso',

  EMAIL_NOT_VALID:
    'O e-mail informado é inválido. Informe um e-mail no formato [nome@domínio.com].',

  USER_LOGOUT: 'Encerra a sessão do usuário.',

  AUTHENTICATION_REQUEST_BAD_SUCCESS: 'Time expired, please login again.',
  AUTHENTICATION_INCORRECT_ORDER_EXCEPTION: 'No token provided.',

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
    'Para acessar endpoints protegidos por um Bearer Token, você precisa fazer o login e fornecer esse token para o Swagger.\n\nGeralmente, há um campo "Authorize" ou "Authentication" na interface do Swagger, onde você pode inserir o token. Certifique-se de que o token esteja no formato "Bearer {seu-token}.',
};
