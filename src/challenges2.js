// Desafio 10


function techList(NomeTech, name) {

  let sortName = NomeTech.sort();
  let arrInserted = [];

  if ((sortName.length == 0) || (sortName[0] == '') || (sortName[0] == " ")) {
    return "Vazio!"
  }

  for (index = 0; index < sortName.length; index += 1) {
    let objectInserted = {};
    objectInserted["tech"] = sortName[index];
    objectInserted["name"] = name;
    arrInserted.push(objectInserted);

  }
  return arrInserted;

}
//sconsole.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

// Desafio 11
function generatePhoneNumber(arr) {
  
  let str = arr.join('');
  myPhoneNumber = `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`;
  
   return myPhoneNumber
}//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(drink) {
regExp = /\d+/g;
result = drink.match(regExp)
let sum = 0;
let numberOfDrinks = result;
for (index = 0; index < numberOfDrinks.length; index +=1){
  
  sum += parseFloat(numberOfDrinks[index])

  if (sum <= 1){

    return sum + " copo de água"
  }
  
  
}  return sum + " copos de água";
  
} //console.log(hydrate("1 vodkas"))



module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
