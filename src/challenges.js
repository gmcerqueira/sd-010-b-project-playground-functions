// Desafio 1
function compareTrue(para1, para2) {
  if (para1 == true && para2 == true) {
    return true;
    } else {
    return false;
  }
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, altura) {
  return (base*altura)/2;
}
console.log(calcArea(51,1))

// Desafio 3
function splitSentence(array) {
  array = array.split(" ");
  return array;
}
console.log(splitSentence("vamo que vamo"))

// Desafio 4
function concatName(string) {
  let nomes = string[string.length - 1] + ", " + string[0];
  return nomes;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = (wins*3) + ties;
  return resultado;
}
console.log(footballPoints(0, 0))

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
