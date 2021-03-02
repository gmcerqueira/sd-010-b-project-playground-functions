// Desafio 1
function compareTrue() {
  let a = true
  let b = true

  if(a==true && b==true){
    console.log(true)
  }else{
    console.log(false)
  }
}

// Desafio 2
function calcArea() {
  let base = 51;
  let height = 1;
  let area = (base*height)/2
  console.log(area)
}

// Desafio 3
function splitSentence() {
  let frase = ("foguete").split(" ")
  console.log(frase)
}

// Desafio 4
function concatName() {

  let array = ['captain', 'my', 'captain'];
  let newArray = [];
  for(let index =0; index < array.length; index += 1){
    if(index==0 || (index == (array.length -1))){
      newArray.unshift(array[index]);
    }
  }
  console.log(newArray);


}

// Desafio 5
function footballPoints() {

let wins = 1;
let ties = 2;
let points = wins*3 + ties*1;
console.log(`${points} pontos.`);



}

// Desafio 6
function highestCount() {

let array = [0,0,0]
let maior = 0
let count = 0
for(let index = 0; index < array.length; index +=1 ){

  if(maior < array[index]){
    maior = array[index]
  }
}
for(let index = 0;index < array.length; index +=1){
  if(maior == array[index]){
    count += 1
  }
}
console.log(count)
}


// Desafio 7
function catAndMouse() {

  let cat1 = 1;
  let cat2 = 2;
  let mouse = 5;
  let distcat1 = (mouse-cat1);
  let distcat2 = (mouse-cat2) ;
  if(distcat1 < distcat2){
    console.log("cat1")
  }else if( distcat2 < distcat1){
    console.log("cat2")
  }else{
    console.log("os gatos trombam e o rato foge")
  }

}

// Desafio 8
function fizzBuzz() {

  let array =   [9, 25] ;
  let fizzBuzz = [];
  for(let index = 0; index < array.length; index += 1){
    if((array[index] % 3 == 0) && (array[index] % 5 != 0)){
      fizzBuzz.push("fizz")
    }else if((array[index] % 5 == 0) && (array[index] % 3 != 0)){
      fizzBuzz.push('buzz')
    }else if((array[index] % 3 == 0) && (array[index] % 5 == 0)){
      fizzBuzz.push('fizzBuzz')
    }else{
      fizzBuzz.push("bug!")
    }
    }
  console.log(fizzBuzz)

  }


// Desafio 9
function encode() {

let string = ("a e i o u").split('')
let frase =""
for(let index = 0; index < string.length; index++){
  switch (string[index]){

    case "a" :
      string[index] = "1"
    break

    case "e" :
      string[index] = "2"
    break

    case "i" :
      string[index] = "3"
    break

    case "o" :
      string[index] = "4"
    break

    case "u" :
      string[index] = "5"
    break
  }
}
for(let index = 0; index < string.length; index +=1){
  frase += string[index]
}
console.log(frase)

}


function decode() {

let string = ("h3 th2r2!").split('')
let frase =""
for(let index = 0; index < string.length; index++){
  switch (string[index]){

    case "1" :
      string[index] = "a"
    break

    case "2" :
      string[index] = "e"
    break

    case "3" :
      string[index] = "i"
    break

    case "4" :
      string[index] = "o"
    break

    case "5" :
      string[index] = "u"
    break
  }
}
for(let index = 0; index < string.length; index +=1){
  frase += string[index]
}
console.log(frase)

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
