const leia = require ("prompt-sync")()

let codigos = ["P01","P02","P03","P04"]
let produtos = ["CAMISA","CALCA","SAIA","SHORT"]
let preco = [0,0,0,0]

    console.log ("ALTERAÇÃO DE DADOS")

for (let x = 0; x < produtos.length; x++){
    console.log (produtos[x])
    produtos[x] = leia("Digite qual o novo nome: ")
}

console.log ("ALTERAÇÃO DE DADOS")

for (let x = 0; x < produtos.length; x++){
    console.log (produtos[x])
    preco[x] = leia("Digite qual o novo preco: ")
}

console.log ("TABELA")
console.log("CÓDIGOS\tPRODUTOS\tPREÇO")

for(let i = 0; i < preco.length; i++){
    console.log(codigos[i]+'\t'+produtos[i]+'\t\t'+preco[i])
}