// // Desafio 11
function verifyRepeated(array) {
  let flag = true; counter = 0;
  for (let key in array) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] === array[key]) {
        counter += 1;
      }
      flag = (counter <= 3);
    }
    return flag;
  }
}

function verifyCharacter(array) {
  let flag = true;
  for (let key in array) {
    if (array[key] < 0 || array[key] > 9) {
      flag = false;
    }
  }
  return flag;
}

function phoneNumber(array){
  let numberFormated = '(';
  for (let i = 0; i < array.length; i += 1) {
    if (i === 2) {
      numberFormated += ') ';
    }
    if (i === 7) {
      numberFormated += '-';
    }
    numberFormated += array[i];
  }
  return numberFormated;
}

function generatePhoneNumber(array) {
  if (array.length === 11) {
    let isNotChacacter = verifyCharacter(array); // é caracter é falso
    let isNotRepeated = verifyRepeated(array);
    if (isNotChacacter && isNotRepeated) {
      return phoneNumber(array);
    }
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return 'Array com tamanho incorreto.';
}

// // teste item 11
array0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(array0));
array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(generatePhoneNumber(array1));
array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1];
console.log(generatePhoneNumber(array2));
array3 = [111, 2, 3, 4, 15, 6, 7, 8, 9, 0, 99];
console.log(generatePhoneNumber(array3));
array4 = [1, 1, 1, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(array4));
