import readlinesync = require("readline-sync");

const numeros: Set<number> = new Set<number>();

for (let i = 0; i < 10; i++) {
    let n: number = readlinesync.questionInt("Digite um numero: ")
    numeros.add(n)
}

console.log("\nLista de Dados")
for (const n of numeros) {
    
    console.log(n)
}

