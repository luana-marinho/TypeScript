import { Console } from "console";
import {Queue} from "../interface/Queue";

const fila = new Queue<number>();

for(let i = 1; i <= 10; i++){
    //adiciona na fila enquanto rodar o for
    fila.enqueue(i)
}
console.log("Exibir todos os elementos da fila");

//Apresenta o resultado
fila.printQueue();

console.log("Exibir o primeiro elemento da fila = " + fila.peek());

console.log("\nChecar se o elemento 1 existe na fila? " + fila.contains(1));
 
fila.clear();
 
console.log("\nA fila está vazia? " + fila.isEmpty());


