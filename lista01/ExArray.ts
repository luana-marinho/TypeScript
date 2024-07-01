import readlinesync = require("readline-sync");

const cores: Array<string> = new Array<string>()
let cor: string;

for (let i = 0; i < 5; i++) {
    cor = readlinesync.question("Digite uma cor: ")

    cores.push(cor)
}

console.log("\nListar todas as cores: ")

for (const cor of cores) {
    console.log(cor);
}

console.log("\nCores ordenadas: ")

for (const cor of cores.sort()) {
    console.log(cor);
}
console.log(cores);






