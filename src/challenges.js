// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(fulName) {
  return `${fulName[fulName.length - 1]}, ${fulName[0]}`;
}
// console.log(concatName(['foguete', 'não', 'tem', 'ré']));
// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(values) {
  let max = Math.max(...values); // https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
  let i = values.indexOf(max);
  // a seguir: https://stackoverflow.com/questions/36631641/javascript-indexof-method-with-multiple-values
  let indexes = [];
  while (i !== -1) {
    indexes.push(i);
    i = values.indexOf(max, i += 1);
  }
  return indexes.length;
}
// console.log(highestCount([9, 1, 9, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  let leastDist = (distanceCat1 < distanceCat2 ? 'cat1' : 'cat2');
  return (distanceCat1 != distanceCat2 ? leastDist : 'os gatos trombam e o rato foge');
}
// console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzzBug = [];
  for (let i = 0; i < numbers.length; i += 1) {
    // fizzBuzzBug[i] = (numbers[i] % 3 == 0 && numbers[i] % 5 == 0 ? "fizzBuzz" : (numbers[i] % 3 == 0 ? "fizz" : (numbers[i] % 5 == 0 ? "buzz" : "bug!")));
    fizzBuzzBug[i] = (numbers[i] % 3 === 0 && numbers[i] % 5 === 0 ? 'fizzBuzz' : false) || (numbers[i] % 3 === 0 ? 'fizz' : false) || (numbers[i] % 5 === 0 ? 'buzz' : 'bug!');
  }
  return fizzBuzzBug;
}
// console.log(fizzBuzz([5, 10, 2, 15, 7, 9, 45]));
// Desafio 9
// a função a seguir funciona, porém não passa no teste automatizado.
// function encode(sentence) {
//   let vowels = 'aeiou';
//   let replace;
//   let regex;
//   for (let i = 0; i < vowels.length; i++) {
//     for (let j = 0; j < sentence.length; j++) {
//       replace = sentence[j];
//       regex = new RegExp(replace,"g");
//       if (sentence[j] == vowels[i]) {
//         sentence = sentence.replace(regex, i + 1);
//         break;
//       }
//     }
//   }
//   return sentence;
// }

function encode(sentence) {
  let vowels = 'aeiou';
  // let replace;
  // let regex;
  for (let i = 0; i < vowels.length; i += 1) {
    for (let j = 0; j < sentence.length; j += 1) {
      // replace = sentence[j];
      // regex = new RegExp(replace,"g");
      if (sentence[j] === vowels[i]) {
        sentence = sentence.replace(vowels[i], i + 1);
      }
    }
  }
  return sentence;
}
// console.log(encode('esvaziou o vazio'));
// O mesmo acontece na função decode, funciona, mas não passa no teste automatizado.
// function decode(encSentence) {
//   let vowels = 'aeiou'
//   let numbers = '12345';
//   let replace;
//   let regex;
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < encSentence.length; j++) {
//       replace = encSentence[j]; // https://stackoverflow.com/questions/494035/how-do-you-use-a-variable-in-a-regular-expression
//       regex = new RegExp(replace,"g");
//       if (encSentence[j] == numbers[i]) {
//         encSentence = encSentence.replace(regex, vowels[i]);
//         break;
//       }
//     }
//   }
//   return encSentence;
// }

function decode(encSentence) {
  let vowels = 'aeiou';
  let numbers = '12345';
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < encSentence.length; j += 1) {
      if (encSentence[j] === numbers[i]) {
        encSentence = encSentence.replace(numbers[i], vowels[i]);
      }
    }
  }
  return encSentence;
}
// console.log(decode('2sv1z345 4 v1z34'));
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
