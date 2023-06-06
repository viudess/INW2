const leia = require("prompt-sync")()

let usuario = leia("Digite o nome do usuário: ")
let salario = leia("Digite o valor do salário: ")
let imposto = salario * 0.15
let imposto2 = salario * 0.25

if(salario < 2500) {
    console.log("Você está isento")
} else if(salario >= 2500 && salario <5000) {
    console.log(`Olá Sr. ${usuario} O valor do imposto a pagar é: ` + imposto)
    console.log("Seu salario liquido é: " + (salario-imposto))
} else if(salario < 5000) {
    console.log(`Olá Sr. ${usuario}. O valor do imposto a pagar é: ` + imposto2)
    console.log("Seu salario liquido é: " + (salario-imposto2))
}

console.log("Fim do programa")