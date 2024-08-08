//1. Crie uma variável que armazene uma temperatura em Fahrenheit, e realize a conversão para Celsius. A equação para realizar a conversão é: C = (F - 32) / 1.8

let tempF = 80
let tempC = (tempF - 32) / 1.8
console.log("A temperatura em celsius é " + tempC.toFixed(1) + "°C") //tofixed(número) arredonda o valor.
//console.log("A temperatura em celsius é" , tempC.toFixed(2)) //a vírgula dá espaço de uma vez.

//2. Crie cinco variáveis que representam cinco notas de um estudante. Calcule a média ponderada, sabendo que o peso das notas são respectivamente: 3, 2, 1, 4 e 5.

let n1 = 9.5  //peso 3
let n2 = 7 //peso 2
let n3 = 10 //peso 1
let n4 = 5.5 //peso 4
let n5 = 6 //peso 5

let mediaPonderada = (n1 * 3 + n2 * 2 + n3 * 1 + n4 * 4 + n5 * 5) /15
console.log("A média ponderada é: " + mediaPonderada.toFixed(1))