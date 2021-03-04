// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  const arr = tech.sort().map( function(nomes) {
    return Object.assign({tech: nomes} , {name: name});
  });
  return arr;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Thiago'));

// Desafio 11
function generatePhoneNumber(number) {
  let a = number.slice();

  const repeat = function repeatedNumbers() {
    let current = null;
    let cnt = 0;
    for (let i = 0; i < number.length; i++) {
      if (number[i] !== current) {
        if (cnt > 0) {
          return cnt + 1;
        }
        current = number[i];
        cnt = 1;
      } else {
        cnt++;
      }
    } 
};


  console.log(repeat());

  const arrNum = function arrayNumbers() {
    // Verificando a quantidade correta de números do array
    if (number.length === 11) {
      return true;
    } else {
      return false;
    }
  };

  const validator = function isValid() {
    let validaNum = [];
    // Verificando se os números são válidos
    for (let i = 0; i < number.length; i++) {
      if (number[i] < 0 || number[i] > 9) {
        return false;
      } else {
        validaNum += validaNum;
      }
    }
    return validaNum;
  };

  if (validator() === false || repeat() >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else if (arrNum() === false) {
    return 'Array com tamanho incorreto.';
  } else {
    return `(${a[0]}${a[1]}) ${a[2]}${a[3]}${a[4]}${a[5]}${a[6]}-${a[7]}${a[8]}${a[9]}${a[10]}`;
  }
}

console.log(generatePhoneNumber([1, 1, 1, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else {
    return false;
  }
}

console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  let num = /\d+/g;
  let cups = string.match(num);
  let soma = 0;

  for (let i = 0; i < cups.length; i++) {
    soma += parseInt(cups[i]);
  }

  if (soma === 1) {
    return `${soma} copo de água`;
  } else {
    return `${soma} copos de água`;
  }
}

console.log(hydrate('2 cerveja 3 vinhos'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
