// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}


// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount() {}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 == cat2) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}
console.log(catAndMouse(0,3,2))
// Desafio 8
function fizzBuzz(array_number) {
  let array = [];
  for (index = 0; index < array_number.length; index += 1) {
    if (array_number[index] % 3 == 0 && array_number[index] % 5 == 0) {
      array[index] = 'fizzBuzz';
    } else if (array_number[index] % 3 == 0) {
      array[index] = 'fizz';
    } else if (array_number[index] % 5 == 0) {
      array[index] = 'buzz';
    } else {
      array[index] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let encoded = '';
  for (index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      encoded += 1;
    } else if (string[index] === 'e') {
      encoded += 2;
    } else if (string[index] === 'i') {
      encoded += 3;
    } else if (string[index] === 'o') {
      encoded += 4;
    } else if (string[index] === 'u') {
      encoded += 5;
    } else {
      encoded += string[index];
    }
  }
  return encoded;
}

function decode(string) {
  let decoded = '';
  for (index = 0; index < string.length; index += 1) {
    if (string[index] == 1) {
      decoded += 'a';
    } else if (string[index] == 2) {
      decoded += 'e';
    } else if (string[index] == 3) {
      decoded += 'i';
    } else if (string[index] == 4) {
      decoded += 'o';
    } else if (string[index] == 5) {
      decoded += 'u';
    } else {
      decoded += string[index];
    }
  }
  return decoded;
}
console.log(decode("h2ll4"))

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
