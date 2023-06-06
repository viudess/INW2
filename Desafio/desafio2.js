const leia = require("prompt-sync")()

let usuario = leia ("Digite seu nome: ")
let idade = leia ("Digite sua idade: ")

if (idade <= 3) {
    console.log ("Não atendemos bebês")
} else if (idade > 3 && idade <= 13) {
    console.log(`${usuario} faixa infantil`)
} else if (idade > 13 && idade <= 17) {
    console.log(`${usuario} faixa adolecente`)
} else if (idade >17 && idade <= 65) {
    console.log(`${usuario} faixa adulta`)
} else if (idade >65) {
    console.log ("Não atendemos bebês")
}