// Desafio 1
function compareTrue(A, B) {
  let retorno = false;
  if (A && B) {
    retorno = true;
  }
  return retorno;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let palavras = sentence.split(' ');
  return palavras;
}

// Desafio 4
function concatName(listaPalavras) {
  let concatenacao = listaPalavras[listaPalavras.length - 1] + ', ' + listaPalavras[0];
  return concatenacao;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totWins = wins * 3;
  let totTies = ties * 1;

  return (totWins + totTies);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let maior = 0;
  let contador = 0;

  for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] > maior) {
      maior = arrayNumbers[index];
      contador = 1;
    } else if (arrayNumbers[index] === maior) {
      contador = contador + 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((mouse - cat1) == (mouse - cat2)) {
    return  "os gatos trombam e o rato foge";
  }
  if ((mouse - cat1) < (mouse - cat2)){
    return  "cat1";
  } else {
    return  "cat2";
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let Words = [];
  for (let index = 0; index < arrayNumeros.length; index++) {
    if ((arrayNumeros[index] % 3 === 0) && (arrayNumeros[index] % 5 === 0)) {
      Words.push("fizzBuzz");
    } else if (arrayNumeros[index] % 3 === 0) {
      Words.push("fizz");
    } else if (arrayNumeros[index] % 5 === 0) {
      Words.push("buzz");
    } else {
      Words.push("bug!");
    }
  }
  return Words;
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
