//1. Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.

function seuImc(peso, altura) {
    return peso / (altura * altura);
}

function statusImc(imc) {
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Sobrepeso");
    } else if (imc >= 30 && imc < 34.9) {
        console.log("Obesidade grau 1");
    } else if (imc >= 35 && imc < 39.9) {
        console.log("Obesidade grau 2");
    } else {
        console.log("Obesidade grau 3");
    }
}

let imc1 = seuImc(62, 1.63);
console.log("Seu IMC é: " + imc1.toFixed(2));
statusImc(imc1);


//2. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%

function decimal (n1){
    let percentual = (n1 * 100)
    console.log (`${percentual}%`)
    return percentual
}

let transformar = decimal (0.45)

//3. Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true

function num(n1) {
    let negative = (n1 < 0)
    console.log (`${negative}`)
    return negative
}

let verdadeiro = num(-6)

//4. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.

function contar(n1) {
    for (let i = 1; i <= n1; i++) {
        console.log(i);
    }
}

let retroage; contar(5)

//5. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.

function nomeCompleto(n1, n2) {
    return `${n1} ${n2}`;
}

let completo = nomeCompleto("Ana", "Schreiner");
console.log(`Seu nome completo é: ${completo}`);

//6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.

function areaCirculo(pi, r){
    let circulo = (pi * r * r)
    console.log (`A área do circulo é: ${circulo}`)
    return circulo
}

let total = areaCirculo(4, 5)

//7. Crie uma função que recebe a área de um circulo e mostra o nível:
//Entre 1 e 20 => Nível I
//Entre 21 e 40 => Nível II
//Qualquer outro diâmetro => Nível inválido

function nivelCirculo(area) {
    if (area >= 1 && area <= 20) {
        console.log("Nível I");
    } else if (area >= 21 && area <= 40) {
        console.log("Nível II");
    } else {
        console.log("Nível inválido");
    }
}

nivelCirculo(15);
nivelCirculo(30);
nivelCirculo(50);


//8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.

function paraMinusculas(str) {
    return str.toLowerCase();
}

let resultado1 = paraMinusculas("CODAR É BOM");
console.log(resultado1);

//9. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.

function contarOcorrencias(str, char) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            contador++;
        }
    }
    return contador;
}

let resultado2 = contarOcorrencias("batata", "a");
console.log(resultado2);
