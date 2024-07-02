import readlinesync = require('readline-sync');

let n1: number;
let n2: number;

//escopo do programa

n1 = readlinesync.questionFloat("Digite o primeio numero: ")
n2 = readlinesync.questionFloat("Digite o segundo numero: ")

console.log(`Soma: ${n1} + ${n2} = ${somar(n1, n2)}`)
console.log(`Subtracao: ${n1} - ${n2} = ${subtrair(n1, n2)}`)
console.log(`Multiplicacao: ${n1} * ${n2} = ${multiplicar(n1, n2)}`)
console.log(`Divisao: ${n1} / ${n2} = ${dividir(n1, n2)}`)

autor();

//escopo da função
function somar(n1: number, n2: number): number{
    return n1 + n2;
}
function subtrair(n1: number, n2: number): number{
    return n1 - n2;
}
function multiplicar(n1: number, n2: number): number{
    return n1 * n2;
}
function dividir(n1: number, n2: number): number|null{
    let divisao: number = n1 / n2;
    return(divisao !== Infinity ? divisao : null)
}
function autor(): void{
    console.log('\nFeito por Luana')
}