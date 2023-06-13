const leia = require("prompt-sync")();

let num = 0
let contador = -1
let total = 0
let maiorNum = 0

do {
    total = total + num
    if(num>maiorNum){
        maiorNum = num
    }
    contador++
    num = parseInt(leia("Digite um número: "))   
} while (num>0) {
    console.log (`Total : ${total}`)
    console.log (`Maior número: ${maiorNum}`)
    console.log (`Quantidade de número : ${contador}`)
}
