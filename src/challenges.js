// Desafio 1
function compareTrue() {
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(" ");
}

// Desafio 4
function concatName() {

}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
// Desafio 6
function highestCount() {
  
}

// Desafio 7
function catAndMouse() {

}
  
// Desafio 8
function fizzBuzz(numbers) {
  for (var i = 1; i <= numbers; i+= 1) {
    if (i % 3 === 0) {
        return "fizz";
    } else if (i % 5 === 0) {
        return "buzz";
    } else if (i % 3 === 0 && i % 5 === 0) {
        return "fizzBuzz";
    } else {
        return "bug!";
    }
  }
}
  
// Desafio 9
function encode() {
  
}
function decode() {
  
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
