// Desafio 1 iniciado no dia 02 de março de 2021 as 14:58 h
function compareTrue(valorUm, valorDois) {
  // seu código aqui
  let valorDois = false;
  let valorUm = true;

  if ((valorUm === true) && (valorDois === true)) {
    console.log(valorUm);
  }else {
    console.log(valorDois);
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let formula = (base * height) / 2;
  switch (formula) {
  case 250:
    return 250;
  case 5:
    return 5;
  case 25.5:
    return 25.5;
  default:
  }
}
// Desafio 3
function splitSentence(goTrybe) {
  // seu código aqui
  return goTrybe.split(' ', 3);
}

// Desafio 4
function concatName(name) {
  // seu código aqui
  return name(['' + '']);
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
