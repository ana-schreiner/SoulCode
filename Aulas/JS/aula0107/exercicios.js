//Crie uma função arrow que recebe dois números e retorna o maior deles.

const maiorNumero = (n, p) => (n > p ? n : p);

console.log(maiorNumero(67, 56));  
console.log(maiorNumero(89, 12));  
console.log(maiorNumero(0, 5));  

//Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula.

const palavras = ["programador", "vendedor", "fisioterapeuta"];

palavras.forEach(palavra => {
    const palavraComPrimeiraMaiuscula = palavra.charAt(0).toUpperCase() + palavra.slice(1);
    console.log(palavraComPrimeiraMaiuscula);
});

//Use map para transformar um array de números, multiplicando cada número por 5.

const numeros = [0, 4, 7, 8, 10];

const numerosMultiplicados = numeros.map(numero => numero * 5);

console.log(numerosMultiplicados);

//Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.

const idades = [6, 18, 45, 20, 17];

const idadesMaioresOuIguaisA18 = idades.filter(idade => idade >= 18);

console.log(idadesMaioresOuIguaisA18);

//Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.

const livro = {
    titulo: "JavaScript: As boas práticas",
    autor: "Ana Schreiner",
    publicacao: {
        editora: "LivroDigital",
        ano: 2024
    }
};

const nomeDaEditora = livro.publicacao.editora;

console.log(nomeDaEditora);

//Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas.

const frutas = ["Jaca", "Banana", "Abacate", "Manga"];

const [primeiraFruta, segundaFruta] = frutas;

console.log("Primeira fruta:", primeiraFruta);
console.log("Segunda fruta:", segundaFruta);


