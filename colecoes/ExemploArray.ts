import readlinesync = require('readline-sync');

const numeros: Array<number> = new Array<number>();

numeros.push(7);
numeros.push(5);
numeros.push(1);
numeros.push(7);

numeros.unshift(2.5, 3.6, 8); //insere numeros
//só funciona com estrutura de dados
for(let numero of numeros)
    console.log(numero);

