// 1. Faça a tabuada completa utilizando o loop for.
for(let i = 1; i <= 10; i++) { // ele está contando até 10
    console.log(`Tabuada do ${i}`); // separa a tabuada.
    for(let j = 1; j <= 10; j++) { // chama do número 1 ao 10
        console.log(`${i} x ${j} = ${i * j}`); // multiplica os lets.
    }
}

// 2. Use um laço for para imprimir na tela a série de Fibonacci até o décimo termo.
// A sequência de Fibonacci é formada pela sequência: 0,1,1,2,3,5,8,13,21,34,55.
let back = 0;
let front = 1;
console.log(back); // imprime o primeiro termo
console.log(front); // imprime o segundo termo

for(let c = 2; c < 10; c++) { // começando de 2 pois os dois primeiros termos já foram impressos
    let seguinte = back + front;
    console.log(seguinte);
    back = front;
    front = seguinte;
}

// 3. Escreva um programa que use um laço for para imprimir na tela os números de 10 a 1 (em ordem decrescente).
for(let dec = 10; dec >= 1; dec--) {
    console.log(dec);
}

// 4. Faça um programa que calcule o fatorial de um número inteiro.
// Ex.: 5! = 5 x 4 x 3 x 2 x 1 = 120.
let f = 5;
let produto = 1;

for(let d = 1; d <= f; d++) {
    produto *= d;
}
console.log(`O fatorial de ${f} é: ${produto}`);

// 5. Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

// 6. Mostre a soma do 50 até o número 100 usando loop for.
let soma = 0;
for(let d = 50; d <= 100; d++) {
    soma += d;
}
console.log(`A soma de 50 até 100: ${soma}`);

// 7. Mostre a seguinte figura com utilização de laços:
// *
// **
// ***
// ****
// *****
let linha = "";
let altura = 5;

for(let estrela = 0; estrela < altura; estrela++) {
    linha += "🌎"; // você usou "🌎" no lugar de "*", então estou mantendo isso
    console.log(linha);
}
