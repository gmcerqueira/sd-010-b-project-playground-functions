// Desafio 1
function compareTrue(bol, bole) {
  return bol && bole;
}
// exemplo de chamada da função: compareTrue(true, false);
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// exemplo de chamada da função: calcArea(10, 4);
// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// exemplo de chamada da função: splitSentence("Xablau is life");
// Desafio 4
function concatName(array) {
  let space = ', ';
  return array[array.length - 1] + space + array[0];
}
// exemplo de chamada da função: concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
// Desafio 5
function footballPoints(wins, ties) {
  let pointsForWin = 3;
  let points = (wins * pointsForWin) + ties;
  return points;
}
// exemplo de chamada da função: footballPoints(10, 10);
// Desafio 6
function highestCount(array) {
  let maxNumber = Math.max(...array);
  let repeatCounter = 0;
  let index;
  for (index = 0; index < array.length; index += 1) {
    if (maxNumber === array[index]) {
      repeatCounter += 1;
    }
  }
  return repeatCounter;
}
// exemplo de chamada da função: highestCount([10,11,8,11]);
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mCat1 = Math.abs(mouse - cat1);
  let mCat2 = Math.abs(mouse - cat2);
  let pow = 'os gatos trombam e o rato foge';
  if (mCat1 < mCat2) {
    return 'cat1';
  }
  if (mCat1 > mCat2) {
    return 'cat2';
  }
  return pow;
}
// exemplo de chamada da função: catAndMouse(10,5,4);
// Desafio 8
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 15 === 0) {
      array[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz';
    } else {
      array[index] = 'bug!';
    }
  }
  return array;
}
// exemplo de chamada da função:  fizzBuzz([10,3,6,5,15]);
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
