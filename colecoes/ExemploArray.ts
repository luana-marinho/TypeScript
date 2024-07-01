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

//é uma sigla pra Create, Read, Update e Delete. Que numa tradução direta ficaria Criar, Ler, Atualizar e Deletar.
// Aí a lógica disso é sobre trabalhar com dados, por exemplo, vc quer criar um cadastro de alunos:
// vc pode criar um aluno (o C)
// vc pode consultar os dados do aluno (R -> read -> ler)
// vc pode atualizar os dados do aluno (U -> update -> atualizar)
// e vc pode deletar o aluno da sua bas