// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 == true && valor2 == true){
    return true;
  }else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
 /////////   
}

// Desafio 4
function concatName(array) {
  let last = array[array.length-1];
  let first = array[0];
  let full = last + ', ' + first;
  return full;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
 ////
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 == cat2){
    return 'os gatos trombam e o rato foge';
  } else if ((cat1 - mouse) < (cat2 - mouse)){
    return 'cat1';
  } else{
    return 'cat2';
  }
}
console,console.log(catAndMouse(1, 4, 4));
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
