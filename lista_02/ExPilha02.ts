import { Console } from "console";
import { Stack } from "../interface/Stack";
const leia = require('readline-sync')

const pilha = new Stack<string>();
let opcao: number;
let livro: string;

while (true) {
    console.log("************************************************");
    console.log("       1 - Adicionar Livro na Pilha             ");
    console.log("       2 - Listar todos os Livros               ");
    console.log("       3 - Retirar Livro da Pilha               ");
    console.log("       0 - Sair                                 ");
    console.log("************************************************");

    opcao = leia.questionInt(console.log("Entre com a opção desejada: "));
    
    if(opcao === 0){
        console.log("\nPrograma finalizado!");
        process.exit(0);
    }
    switch (opcao) {

        case 1:
            livro = leia.question("\nDigite o nome do Livro: ");
            pilha.push(livro)
            break;
        case 2:
            pilha.printStack();
            break;
        case 3:
            pilha.pop();
            break;
        default:
            console.log("Opcao invalida!");
            break;
    }
}