// Desafio 10
function techList(nameTechs, nameUser) {
  // seu código aqui
  let result = []; let lista;
  if (nameTechs.length === 0 || nameUser === '') {
    result = 'Vazio!';
    return result;
  }
  for (let index = 0; index < nameTechs.sort().length; index += 1) {
    lista = {};
    lista.tech = nameTechs[index];
    lista.name = nameUser;
    result[index] = lista;
  }
  return result;
} console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Carlos'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
