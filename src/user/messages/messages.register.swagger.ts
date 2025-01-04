
export const userMessagesSwagger = {
  API_RESPONSE_SEARCH: 'Usuário específico.',

  LIST_REGISTERS: 'Mostrar todos os registros.',

  DESCRIPTION_CREATE_USER: 'Essa funcionalidade cria um usuário com os campos específicos abaixo.',
};

export const userDescriptionSwagger = {

  DESCRIPTION_RESPONSE_GET_FILTER: 'Filtra e faz a paginação de registros relacionados a esta funcionalidade pelos campos:'
    + '\n\n- " <strong>page</strong > " (númreo de páginas)'
    + '\n\n- " <strong>limit</strong> " (númreo de limite de registros por página)'
    +'\n\n- " <strong>status</strong> " (status )'
    + '\n\n- " <strong>createdAt</strong> " (data de criação)'
    + '\n\n- " <strong>updatedAt</strong> " (data de atualização)',

  /* #################################################################################################### */

  DESCRIPTION_CREATE_USER: 'Essa funcionalidade cria um usuário com os campos específicos abaixo.'
    + '\n\n- " <strong>fullName</strong> " (nome completo)'
    + '\n\n- " <strong>mail</strong> " (e-mail do usuário)'
    + '\n\n- " <strong>password</strong> " (senha do usuário)'
    + '\n\n- " <strong>generatePassword</strong> " (senha automatizada)',
  /* #################################################################################################### */

  DESCRIPTION_RESPONSE_UPDATE_PASSWORD: 'Atualiza a senha do usuário usando os campos' 
  + '<strong>password</strong> e <strong>comfirmPassword</strong>.' 
  + '\n\n- " <strong>password</strong> " (senha do usuário)'
  + '\n\n- " <strong>confirmPassword</strong> " (senha de confirmação)',

  DESCRIPTION_RESPONSE_UPDATE_DATA: 'Atualiza os dados do usuário:'
    + '\n\n- " <strong>fullName</strong> " (nome completo)'
    + '\n\n- " <strong>mail</strong> " (e-mail do usuário)',

  /* #################################################################################################### */

  DESCRIPTION_RESPONSE_UPDATE_STATUS_USER: 'Atualiza o status do usuario com este campo:'
    + '\n\n- " <strong>status</strong> " (status)',
  /* #################################################################################################### */

  DESCRIPTION_RESPONSE_DELETE_USER: 'Deleta um usuário específico.',

  DESCRIPTION_RESPONSE_SEARCH: 'Faz uma busca específica por <strong>nome</strong> pelo campo " <strong>fullName</strong> ".',
};
