// Desafio 1
let a = true;
let b = true;
function compareTrue(num1, num2) {
   if (num1 === true && num2 === true){
   return true;
  } else {
   return false;
 }
}
console.log(compareTrue(a, b))

// Desafio 2
let c = 5;
let d = 2;
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(c, d))

// Desafio 3
//Entendimento com o Plantão e com link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split#usando_split
function splitSentence(string) {
  let fraseSeparada = string.split(" ");
  return fraseSeparada
}
console.log(splitSentence("vamo que vamo"))

// Desafio 4
function concatName(primeiroComUltimo) {
  let trazUltimo = primeiroComUltimo.length -1
  return `${primeiroComUltimo[trazUltimo]}, ${primeiroComUltimo[0]}` 
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']))

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = 3 * wins;
  let empate = 1 * ties;
  return vitoria + empate;
}
console.log(footballPoints(14,8))

// Desafio 6
function highestCount(qtdDoMaior) {
let maior = 0;
let repete = 0;

for (let index = 0; index < qtdDoMaior.length; index++) {
  if (qtdDoMaior[index] >= maior) {
    maior = qtdDoMaior[index]; 
  }
}
for (let index = 0; index < qtdDoMaior.length; index++) {
  if (qtdDoMaior[index] === maior) {
    repete ++
  }
}
return repete
}
console.log(highestCount([9, 1, 9, 2, 9, 5, 7]))

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
