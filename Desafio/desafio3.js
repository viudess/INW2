const leia = require("prompt-sync")()

let numero;
let total = 0;

numero = parseInt(leia("Digite um numero inteiro positivo: "))

for(i=1; i<=numero; i++){
    if ((i%2)==1){
    console.log(i)
    total += i;
    }
}

console.log(`A soma dos valores é: ${total}`);