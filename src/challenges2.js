// Desafio 10

function techList(array) {
  for (let index = 0; index < array.length; index += 1) {
    let obj = new Object ();
      obj.tech = array[index];
      obj.name = 'name';
      if (array[index] === '') {
        console.log ('Vazio!');
      }
      console.log(obj);
  }
}
console.log (techList(["React", "Jest", "HTML", "CSS", "JavaScript"]));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
