//1. Escreva um programa que inverte uma string

let palavra = "mundo doido";
let invertida = "";
for(let i = palavra.length -1; i >= 0; i--){
  invertida = invertida + palavra[i]
}

console.log(invertida)

//2. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"

let frase = "Estudar JavaScript é legal";
let remover = "legal";

let fraseModificada = frase.replace(remover, "###");

console.log(fraseModificada); // Output: "A programação é ### e desafiadora."


//3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com

const emailProf = "professor@soulcodeacademy.org";

if(emailProf.endsWith("soulcode.com") || emailProf.endsWith("soulcodeacademy.org")) {
    console.log("Este email pertence a Soulcode!");
} else {
    console.log("Este email não pertence a Soulcode!")
}