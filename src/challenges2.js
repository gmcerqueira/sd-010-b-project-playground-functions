// Desafio 10
function techList (arrayTech, name) {
  // seu código aqui
  let arrayKnowHow = [];
  let order = arrayTech.sort() // coloca o array em ordem
  let resp = ''
  for (let t in order) {
    let knowHow = {}; // cria um objeto para cada tech
    knowHow.tech = order[t];
    knowHow.name = name;
    arrayKnowHow.push(knowHow); // adiciona o objeto no array
  }
  if (order === []) {
    resp = 'Vazio!';
  } else {
    resp = arrayKnowHow;
  }
  return resp;
}

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
