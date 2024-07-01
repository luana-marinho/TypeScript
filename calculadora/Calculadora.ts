import readlinesync = require('readline-sync');

let n1: number;
let n2: number;

n1 = readlinesync.questionFloat("Digite o primeio numero: ")
n2 = readlinesync.questionFloat("Digite o segundo numero: ")

console.log(`Soma: ${n1} + ${n2} = ${n1+n2}`)
console.log(`Subtracao: ${n1} - ${n2} = ${n1-n2}`)
console.log(`Multiplicacao: ${n1} * ${n2} = ${n1*n2}`)
console.log(`Divisao: ${n1} / ${n2} = ${n1/n2}`)