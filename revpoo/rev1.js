const leia = require("prompt-sync")();

let num = leia ("Coloque seu numero: ");

if (num >=5 && num <=9) {
    while(num <= 100){
        console.log(num);
        num *= 3;
    }
} else {
    console.log("Não compativel");
}