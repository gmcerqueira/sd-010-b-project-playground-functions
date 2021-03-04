// Desafio 1
function compareTrue(a, b) {
  let resposta;
  if (a === true && b === true) {
    resposta = true;
  } else {
    resposta = false;
  }
  return resposta;
}
console.log(compareTrue(true, true));
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(arrayStrings) {
  let resultado = '';
  let last = arrayStrings.length - 1;
  resultado = arrayStrings[last] + ', ' + arrayStrings[0];
  return resultado;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  let resultado = vitorias + empates;
  if (wins === true) {
    wins = vitorias;
  }
  if (ties === true) {
    ties = empates;
  }
  return resultado;
}
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(arrayNumbers) {
  let numeroMaior = 0;
  let vezesAparece = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > numeroMaior) {
      numeroMaior = arrayNumbers[i];
    }
  }
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] === numeroMaior) {
      vezesAparece = vezesAparece + 1;
    }
  }
  return vezesAparece;
}
console.log(highestCount([1, 2, 3, 3, 4, 4, 4, 4]));

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
