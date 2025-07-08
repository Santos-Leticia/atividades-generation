const leia = require ("readline-sync");

let notaUm = leia.questionInt('Digite a nota 1: ');
let notaDois = leia.questionInt('Digite a nota 2: ');
let notaTres = leia.questionInt('Digite a nota 3: ');
let notaQuatro = leia.questionInt('Digite a nota 4: ');

let mediaFinal = (notaUm + notaDois + notaTres + notaQuatro)/4

console.log ("\n Media Final:" + mediaFinal);
