const leia = require ("readline-sync");

let numeroUm = leia.questionInt('Digite o primeiro numero: ') ;
let numeroDois = leia.questionInt('Digite o segundo numero: ');
let numeroTres = leia.questionInt('Digite o terceiro numero: ') ;
let numeroQuatro = leia.questionInt('Digite o quarto numero: ');

let diferenca = ((numeroUm * numeroDois) - (numeroTres * numeroQuatro));
console.log ("\n Diferença:" + diferenca);