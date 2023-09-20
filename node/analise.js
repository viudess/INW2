function calcularMedia(nome, ac=5 , at){
    if (at === undefined) {
        console.log(`${nome} está em RECUPERAÇÃO.`);
        return;
    }else if ((ac+at)/2 <= 6) {
        console.log(`${nome} está com média ${(ac+at).toFixed(2)} e precisa de recuperação.`);
    } else {
        console.log(`${nome} está aprovado com média ${media.toFixed(2)}.`);
    }
}

calcularMedia("João", 4);
calcularMedia("Maria", 7, 8);
calcularMedia("Pedro", 5, 3);
