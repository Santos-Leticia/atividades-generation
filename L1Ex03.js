const leia = require ("readline-sync");

let salarioBruto = leia.questionInt('Digite o salario bruto: ') ;
let adicionalNoturno = leia.questionInt('Digite o adicional noturno: ') ;
let horaExtra = leia.questionInt('Digite a hora extra: ') ;
let desconto = leia.questionInt('Digite o desconto: ') ;

let salarioLiquido = (salarioBruto + adicionalNoturno + (horaExtra * 5)-desconto)
console.log ("\n Salario liquido:" + salarioLiquido.toFixed(2));