// Desafio 1
function compareTrue(x, y) {
  return x && y;
}


////////////////////////////////////////////////////////////////////////////////////
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}


/////////////////////////////////////////////////////////////////////////////////////
// Desafio 3
function splitSentence(string) {
 return string.split('');
}
console.log(splitSentence ( "go Trybe" ));


/////////////////////////////////////////////////////////////////////////////////////
// Desafio 4
function concatName(lista) {
  let concat = lista[lista.length -1] + ", " + lista[0];
  return concat;
}

//////////////////////////////////////////////////////////////////////////////////////
// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3 ) + (ties * 1));
}

// Desafio 6
function highestCount() {
  let higherNumber = 0;
  let counter = 0;
  for (const i in numbers) {
    if (numbers[i] > higherNumber) {
      higherNumber = numbers[i];
      counter = 0;
    }
  }
  for (const i in numbers) {
    if (numbers[i] == higherNumber) {
      counter += 1;
    }
  }
  return counter;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7])); 
console.log(highestCount([0, 4, 4, 4, 9, 2, 1])); 
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  if (dist1 < dist2) {
    return 'cat1';
  }
  if (dist1 > dist2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(0, 3, 2)); 
console.log(catAndMouse(0, 6, 12)); 
console.log(catAndMouse(0, 5, 5));

// Desafio 8
function fizzBuzz(umaLista) {
  let out = [];
  for (let key in umaLista) {
    if (umaLista[key] % 3 == 0 && umaLista[key] % 5 == 0){
      out.push("fizzBuzz");
    }else if (umaLista[key] % 3 == 0){
      out.push("fizz");
    }else if (umaLista[key] % 5 == 0){
      out.push("buzz");
    }else{
      out.push("bug!")
    }
  }
  return out;
}

// Desafio 9
function encode() {
  ///
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
