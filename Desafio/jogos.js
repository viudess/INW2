const leia = require("prompt-sync")()

let aluno1, aluno2
let nota1, nota2

aluno1 = leia ("Digite o nome do aluno 1:")
nota1 = leia ("Digite a nota do aluno 1:")

if(nota1<5){
    console.log (`Oi ${aluno1}, você ta de rec...`)
} else {
    console.log(`Oi ${aluno1}, você esta aprovado`)
}

if(nota2<5){
    console.log (`Oi ${aluno2}, você ta de rec...`)
} else {
    console.log(`Oi ${aluno2}, você esta aprovado`)
}