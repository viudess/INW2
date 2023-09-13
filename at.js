const leia = require('prompt-sync')();

const codigo = ["COD01","COD02", "COD03", "COD04","COD05", "COD06", "COD07","COD08", "COD09", "COD10"];
const servico = ["Centro de Valorização da Vida","Diagnostico e Tratamento de Transtornos e Disturbios", "Terapia Gratis", "Psiquiatra Gratis","Clinica de Voluntários", "Rotina Personalizada", "Hospitais Psiquiatricos","Helpcenter Ligação Para Ajuda", "Reunião de Desabafo", "Redes Sociais"];
const valorUnitarioDoacao = [10, 20, 15, 5, 25, 30, 25, 10, 30, 5];
const movimento = ["0", "0"];
//const movimento = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
let index = 0;
let total = 0;

function finalizar(){
    console.log("Carrinho final:");
    for(i = 0; i < movimento.length; i++){
        index = codigo.indexOf(movimento[i]);
        console.log(codigo[index] + "\t" + servico[index] + "\t" + valorUnitarioDoacao[index]);
        total += valorUnitarioDoacao[index];
    }
    console.log(`Total: ${total}`);
    let quer = leia("Gostaria de finalizar a doação(F) ou desistir(D)? ");
    if(quer == "F"){
        let quer = leia("Valor doado! Gostaria de continuar?(S/N) ");
        if(quer == "S"){
            fazerDoacoes();
        } else {
            console.log("Até breve!")
        }
    } else {
        console.log("Doação cancelada. Até breve!")
    }
}

function fazerDoacoes(){
    let i = 0;
    while(i < movimento.length){
        console.log(`Doação ${i + 1}`);
        for(j = 0; j < codigo.length; j++){
            console.log(codigo[j] + "\t" + servico[j] + "\t" + valorUnitarioDoacao[j]);
        }
        let doou = leia("Qual é a doação desejada? ");
        if(movimento.includes(doou)){
            console.log("Você já escolheu essa opção, tente novamente");
        } else {
            movimento[i] = doou;
            console.log(movimento)
            i++;

            if(i < movimento.length){
                let quer = leia("Gostaria de continuar?(S/N) ");
                if(quer == "N"){
                    finalizar();
                    break;
                }
            } else {
                finalizar();
                break;
            }
        }
    }
}

let quer = leia("Gostaria de fazer doações?(S/N) ");
if(quer == "S"){
    fazerDoacoes();
} else {
    console.log("Até breve!")
}