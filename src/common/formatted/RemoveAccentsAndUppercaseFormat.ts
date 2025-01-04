export const convertToUppercaseWithoutAccents = (data) => {
  // Substitui caracteres acentuados por seus equivalentes não acentuados
  const mapAccents = {
    'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
    'à': 'a', 'è': 'e', 'ì': 'i', 'ò': 'o', 'ù': 'u',
    'â': 'a', 'ê': 'e', 'î': 'i', 'ô': 'o', 'û': 'u',
    'ã': 'a', 'ñ': 'n', 'õ': 'o',
    'ç': 'c',

    'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U',
    'À': 'A', 'È': 'E', 'Ì': 'I', 'Ò': 'O', 'Ù': 'U',
    'Â': 'A', 'Ê': 'E', 'Î': 'I', 'Ô': 'O', 'Û': 'U',
    'Ã': 'A', 'Ñ': 'N', 'Õ': 'O',
    'Ç': 'C',
  };

  // Aplica as substituições e remove acentuações
  const removeAccents = data.replace(/[áéíóúàèìòùâêîôûãñõçÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÑÕÇ]/g, (matched) => {
    return mapAccents[matched];
  });

  // Remove espaços em branco extras antes e depois da string
  const trimmedData = removeAccents.trim();

  // Reduz espaços em branco extras entre palavras para um único espaço
  const singleSpaceData = trimmedData.replace(/\s+/g, ' ');

  // Converte para letras maiúsculas
  return singleSpaceData.toUpperCase();
};

export const convertToUppercaseWithoutAccentsObject = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = convertToUppercaseWithoutAccents(obj[key]);
    } else if (typeof obj[key] === 'object') {
      convertToUppercaseWithoutAccentsObject(obj[key]); // chama recursivamente para objetos aninhados
    }
  }
  return obj;
};

// const diacriticalCharactersRegex = /[\u0300-\u036f]/g;
// const nonASCIIRegex = /[^\x00-\x7F]/g;
// const spaceRegex = /[\s]/g;

// const filenameFormated = file.originalname
//   .normalize('NFD')
//   .replace(diacriticalCharactersRegex, '')
//   .replace(nonASCIIRegex, '')
//   .replace(spaceRegex, '_');

// const filename = `${uuid()}-${filenameFormated}`;