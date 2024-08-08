/*
1. Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:
Maior ou igual 7 = Aprovado
Entre 5 e 7 = Reforço
Menor que 5 = Reprovação
*/
let n1 = 3;
let n2 = 3;
let n3 = 3;

let mediaPonderada = (n1 + n2 + n3) / 3;

if (mediaPonderada >= 7) {
    console.log("Parabéns, você foi aprovado. Sua nota final foi " + mediaPonderada.toFixed(1));
} else if (mediaPonderada >= 5 && mediaPonderada < 7) {
    console.log("Infelizmente você terá de fazer reforço. Sua nota final foi " + mediaPonderada.toFixed(1));
} else {
    console.log("Infelizmente você está reprovado. Sua nota final foi " + mediaPonderada.toFixed(1));
}

/*
2. Simule a tabela do IMC com base no valor calculado pela formula: IMC = PESO / (ALTURA x ALTURA).
Indique o status com base no valor do IMC.
*/
let peso = 62;
let altura = 165;
let alturaEmCm = altura / 100;

let IMC = peso / (alturaEmCm * alturaEmCm);
console.log("Seu IMC é " + IMC.toFixed(1));

/*
3. Defina um número a e um número b. Verifica qual o maior, ou menor, ou se são iguais!
*/
let a = 4;
let b = 5;

if (a > b) {
    console.log("O número " + a + " é maior que " + b);
} else if (a < b) {
    console.log("O número " + a + " é menor que " + b);
} else {
    console.log("Os números " + a + " e " + b + " são iguais");
}

/*
4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais: Caso não possua dependentes não realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário.
*/
let salario = 1500;
let quantidadeDependentes = 4;
let salarioReajustado;

if (quantidadeDependentes == 0) {
    console.log("Você não possui o necessário para obteção do ajuste salarial");
} else if (quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
    salarioReajustado = salario + (salario * 0.30);
    console.log("Você possui o necessário para obter 30% de reajuste salarial, o novo salário será: " + salarioReajustado.toFixed(2));
} else if (quantidadeDependentes > 5) {
    salarioReajustado = salario + (salario * 0.40);
    console.log("Você possui o necessário para obter 40% de reajuste salarial, o novo salário será: " + salarioReajustado.toFixed(2));
}

/*
5. Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 - Segunda, ... 7 - Sábado). Com base no valor indique se é final de semana ou dia útil.
*/
let dia = 2;

if (dia === 1 || dia === 7) {
    console.log("Final de semana!");
} else if (dia >= 2 && dia <= 6) {
    console.log("Dia útil!");
} else {
    console.log("Não existe este dia da semana!");
}

/*6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
Caso 1) É um número divisível por 4, mas não é divisível por 100. 
Caso 2) É um número divisível por 4, por 100 e por 400.
*/
let ano = 2025;

if (ano % 4 === 0 && ano % 100 !== 0) {
    console.log("O ano é bissexto!");
} else if (ano % 100 === 0 && ano % 400 === 0) {
    console.log("O ano é bissexto!");
} else {
    console.log("O ano não é bissexto!");
}

//7. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso.

let idade = 10

if (idade <= 0 || idade >= 130) {
    console.log("Sua idade é iválida, pois " + idade + "não existe.")
} else {
    console.log("A idade é válida, você tem " + idade + " anos");
}

//8. Crie uma variável com o turno de aula: M-matutino ou V-Vespertino ou N- Noturno. Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

let turnoAula = 'n'

if (turnoAula === 'm') {
    console.log("Bom Dia!")
    
} else if(turnoAula === 'v'){
    console.log("Boa Tarde!")

} else if(turnoAula === 'n'){
    console.log("Boa Noite!")
} else {
    console.log("Valor Inválido!");
}