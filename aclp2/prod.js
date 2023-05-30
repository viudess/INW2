const leia = require("prompt-sync")();
class Produto {
    constructor(id, descricao, ativo, estoque, preco, atributo1, atributo2) {
      this.id = id;
      this.descricao = descricao;
      this.ativo = ativo;
      this.estoque = estoque;
      this.preco = preco;
      this.atributo1 = atributo1;
      this.atributo2 = atributo2;
    }
  
    ativar() {
      this.ativo = true;
    }
  
    retirarEstoque(valor) {
        if (this.ativo) {
          if (valor < 0) {
            console.log("Impossível realizar, valor negativo");
          } else if (valor == 0) {
            console.log("Impossível realizar, valor zerado...");
          } else {
            this.saldo += valor;
          }
        } else {
          console.log("Conta inativa....");
        }
      }
    
      incluirEstoque(valor) {
        if (this.ativo) {
          if (valor < 0) {
            console.log("Impossível realizar, valor negativo...");
          } else if (valor == 0) {
            console.log("Impossível realizar, valor zerado...");
          } else if (valor > this.saldo) {
            console.log("Impossível realizar, saldo indisponível...");
          } else {
            this.saldo -= valor;
          }
        } else {
          console.log("Conta inativa...");
        }
      }
    }
  
    exibirDados(){
      console.log(`ID: ${this.id}`);
      console.log(`Descrição: ${this.descricao}`);
      console.log(`Ativo: ${this.ativo}`);
      console.log(`Estoque: ${this.estoque}`);
      console.log(`Preço: ${this.preco}`);
      console.log(`Atributo 1: ${this.atributo1}`);
      console.log(`Atributo 2: ${this.atributo2}`);
    }

  // Criação do objeto Produto com valores iniciais
  const produto = new Produto(1, "Produto A", true, 10, 50, "Valor1", "Valor2");

  // Simulação de 5 movimentos de compra do produto
  for (let i = 0; i < 5; i++) {
    console.log(`\nMovimento de compra ${i + 1}`);
    const quantidadeCompra = parseInt(prompt("Informe a quantidade comprada: "));
    const valorTotal = quantidadeCompra * produto.preco;
    produto.retirarEstoque(quantidadeCompra);
    console.log(`Valor total da compra: ${valorTotal}`);
    produto.exibirDados();
  }
  
  // Solicitação de incluirEstoque conforme necessidade
  while (produto.estoque < 10) {
    console.log("\nSolicitação de incluirEstoque");
    const quantidadeIncluir = parseInt(prompt("Informe a quantidade a incluir: "));
    produto.incluirEstoque(quantidadeIncluir);
    produto.exibirDados();
  }

  console.log("ViudesTec");
  console.log("Só temos a melhor geração!\n");
  
  const tipoConta = leia(
    "1 - CONTA POUPANÇA\n2 - SAIR\n\nDIGITE O CÓDIGO DA OPÇÃO SELECIONADA: "
  );
  
  if (tipoConta == "1") {
    const numero = parseInt(leia("Digite o número da conta: "));
    const cpf = leia("Digite o CPF da conta: ");
    const saldo = parseFloat(leia("Digite o saldo atual da conta: "));
    const ativo = leia("A conta está ativa? (S/N): ") == "S";
    const dataAniversario = new Date(leia("Digite a data de aniversário da conta (AAAA-MM-DD): "));
  
    const contaPoupanca = new ContaPoupanca(numero, cpf, saldo, ativo, dataAniversario);
  
    for (let x = 1; x <= 10; x++) {
      console.log("\nCONTA POUPANÇA");
      console.log("Saldo Atual: R$ " + contaPoupanca.saldo.toFixed(2));
  
      const op = leia("MOVIMENTO - D - débito ou C - crédito: ");
      const valor = parseFloat(leia("Valor do movimento: R$ "));
  
      if (op == "D") {
        contaPoupanca.debito(valor);
      } else if (op == "C") {
        contaPoupanca.credito(valor);
      }
  
      const continuar = leia("\nContinuar? (S/N): ");
      if (continuar != "S") {
        break;
      }
    }
}