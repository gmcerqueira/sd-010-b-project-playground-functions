// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  result = false;
  if (a === b && b === a) {
    result = true;
  }
  return result;
}
console.log(compareTrue('jonas', 'thiago'));

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura) / 2;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence() {
  // seu código aqui

}

// Desafio 4
function concatName() {
  // seu código aqui
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
