// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if (boolean1 === true && boolean2 === true) {
    return (true);
  }
  if (boolean1 === false && boolean2 === false) {
    return (false);
  }
  if ((boolean1 === false && boolean2 === true) || (boolean1 === true && boolean2 === false)) {
    return (false);
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let spaceFound = 0;
  let wordFound = '';
  let latestSpaceFound = 0;
  let phraseSplited = [];

  for (let counterLettersStr = 0; counterLettersStr < string.length; counterLettersStr += 1) {
    if (string[counterLettersStr] === ' ') {
      spaceFound = counterLettersStr;
      for (let wordCleanUp = latestSpaceFound; wordCleanUp < spaceFound; wordCleanUp += 1) {
        wordFound += string[wordCleanUp];
      }
      phraseSplited.push(wordFound);
      wordFound = '';
      latestSpaceFound = counterLettersStr + 1;
    } else if (counterLettersStr === string.length - 1) {
      spaceFound = counterLettersStr;
      for (let wordCleanUp = latestSpaceFound; wordCleanUp < spaceFound; wordCleanUp += 1) {
        wordFound += string[wordCleanUp];
      }
      wordFound += string[string.length - 1];
      phraseSplited.push(wordFound);
      wordFound = '';
      latestSpaceFound = counterLettersStr + 1;
    }
  }
  return (phraseSplited);
}

// Desafio 4
function concatName(arrayOfStrings) {
  // seu código aqui
  //variavel que vai receber o resultado final
let phraseOfElements = '';

phraseOfElements = (arrayOfStrings[(arrayOfStrings.length-1)]) + ', ' + (arrayOfStrings[(arrayOfStrings.length) - (arrayOfStrings.length)]);

return phraseOfElements;
}

// Desafio 5
function footballPoints() {
let pointsWins = (wins * 3);
let pointsTies = (ties * 1)
let pointsTotal = (pointsTies + pointsWins)

return pointsTotal;
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
