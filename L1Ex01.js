const readline = require('readline-sync');

const leia = require('readline-sync');

let salario = 10000; 

let abono = 1000; 

let novoSalario = salario + abono; 

salario = leia.questionInt("\n Digite o salário:");

abono = leia.questionInt("\n Digite o abono:");

novoSalario = salario+abono;

console.log ("\n Novo salário:" + novoSalario);