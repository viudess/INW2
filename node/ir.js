function calcularImpostoDeRenda(rendaAnual) {
    let impostoDevido = 0;
    let mensagem = "";
  
    if (rendaAnual <= 1500) {
      mensagem = `Seu salário é R$ ${rendaAnual.toFixed(2)} e você é ISENTO.`;
    } else if (rendaAnual > 1500 && rendaAnual <= 2500) {
      impostoDevido = rendaAnual * 0.15;
    } else {
      impostoDevido = rendaAnual * 0.25;
    }
  
    if (impostoDevido > 0) {
      mensagem = `Seu salário é R$ ${rendaAnual.toFixed(2)}, o imposto é de R$ ${impostoDevido.toFixed(2)} e seu salário final é R$ ${(rendaAnual - impostoDevido).toFixed(2)}.`;
    }
  
    return mensagem;
  }
  
  const rendaAnual = 2000; // Substitua pelo valor da renda anual que você deseja calcular
  
  const resultado = calcularImpostoDeRenda(rendaAnual);
  
  console.log(resultado);