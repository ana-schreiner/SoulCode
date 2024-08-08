//Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.

function numeros(arr) {
    let par = [];

    for (let n of arr) {
        if (n % 2 === 0) {  // Verifica se o número é par
            par.push(n);  // Adiciona o número par ao array pares
        }
    }

    return par;
}

let valores = [10, 7, 4];
let resultado = numeros(valores);
console.log(resultado);

//Escreva uma função que receba um array de números e retorne a soma de todos os números.

function numeros(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
         {
            total += array[i];
        }
    }
    return total;
}
var array = [2, 6, 2, 0];
console.log(numeros(array));

//Escreva uma função que receba um array de números e retorne o menor número do array.

let numeros = ['76', '54', '97', '34', '22'];

let mapeia = numeros.map(Number);

let minimo = Math.min(...numeros);

console.log(minimo);

//Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3

function aluno(nome, presencas, notas) {
    this.nome = nome;
    this.presencas = presencas;
    this.notas = notas;
}

let aluno1 = new aluno("Maria", 22, [12, 10, 20]);
let aluno2 = new aluno("Carla", 20, [9.5, 10, 15]);
let aluno3 = new aluno("Paulo", 12, [10, 10, 10]);

let listAlunos = [aluno1, aluno2, aluno3];

const medias = [];
for (const aluno of listAlunos) {
    let soma = 0;
    for (const nota of aluno.notas) {
        soma += nota;
    }
    let media = soma / aluno.notas.length;
    medias.push({nome: aluno.nome, media: media});
}

console.log(medias);