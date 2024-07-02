import { Console } from "console";
import { Queue } from "../interface/Queue";
import { exit } from "process";
const leia = require('readline-sync')

const fila = new Queue<string>();
let opcao: number;
let nome: string;

while (true) {
    console.log("************************************************");
    console.log("       1 - Adicionar Cliente na Fila            ");
    console.log("       2 - Listar todos os Clientes             ");
    console.log("       3 - Retirar Cliente da Fila              ");
    console.log("       0 - Sair                                 ");
    console.log("************************************************");

    opcao = leia.questionInt(console.log("Entre com a opção desejada: "));
    
    if(opcao === 0){
        console.log("\nPrograma finalizado!");
        process.exit(0);
    }
    switch (opcao) {

        case 1:
            nome = leia.question("\nDigite o nome do Cliente: ");
            fila.enqueue(nome)
            break;
        case 2:
            fila.printQueue();
            break;
        case 3:
            fila.dequeue();
            break;
        default:
            console.log("Opcao invalida!");
            break;
    }
}