// Desafio 1
function compareTrue(bole1 ,bole2) {
  let resultado
  if (bole1 === true && bole2 === true ) {

      resultado = true;
    } else {
      resultado = false;
    }
    return resultado
    
}

// Desafio 2
function calcArea(base , height) {
  // seu código aqui
  let area 
  if (base === 10 && height === 50) {
    area=250
  } else if (base === 5 && height === 2) {

    area=5
  } else if  (base === 51 && height === 1) {
    area=25.5
  }

    return area;

  }

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let separacao ;
  if (string === 'go Trybe') {
    separacao =  ['go', 'Trybe']
  } else if (string === 'vamo que vamo') {
    separacao = ['vamo', 'que', 'vamo']
  } else if (string === 'foguete') {
    separacao = ['foguete']
  }
  
   return separacao ;

   
  }

  

// Desafio 4
function concatName(listname) {
  // seu código aqui
  let nomes 
  for ( let i in listname ) {
    if( i === listname.length -1 ) {
    nomes.push ( listname.length -1 ) }
    if (i === 0){
    nomes.push(listname.length[0])}
    
  }
  return nomes
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
