// 1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.

let numero = 2; // Valor inicial

// Condição de parada
while (numero <= 10) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
    numero++; // Atualização
}

for(let c = 2; c <= 10; c+=2){
    console.log(c);
}

//Resolução do professor
// let cont = 2;

// while(cont <= 10) {
//     console.log(cont);
//     cont = cont + 2;
// }

console.log("Fim dos números pares de 2 a 10");


// 2. Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).

let cont2 = 1;
let n = 7;
let produto;

//Condição de parada
while(cont2 <= 10) {
    produto = cont2*n;
    console.log(n + " x " + cont2 + " = " + produto);
    cont2++;
}

console.log("Fim da tabuada do 7");


// 3. Use um laço while para somar de 1 até 999, apenas somando os números ímpares. Utilize um if para verificar se o número é ímpar.

numero = 1; // Valor inicial
let soma = 0; // Variável para acumular a soma

// Condição de parada
while (numero <= 999) {
    
    if (numero % 2 != 0) {
        soma += numero;
    }
    numero++;
}

console.log("A soma de todos os números ímpares de 1 a 999 é:", soma);


// 4. Conte e mostre todos os números divisíveis por 9 entre 1 e 1000

numero = 1; // Valor inicial
let contador = 0; // Variável para contar os números divisíveis por 9

// Condição de parada
while (numero <= 1000) {
    
    if (numero % 9 === 0) {
        console.log(numero);
        contador++;
    }
    numero++;
}

console.log("Total de números divisíveis por 9 entre 1 e 1000:", contador);

