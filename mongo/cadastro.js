const { default: mongoose } = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/livros',
{useNewUrlParser : true, 
useUnifiedTopology :  true, 
serverSelectionTimeoutMS : 10000});

const db=mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', function() {
    console.log("Estamos logado no mongodb");
});

const produtoSchema = new mongoose.Schema({
    descricao : String,
    ano : Number, 
    valor : Number,
    estoque : Number
});

const Produto = mongoose.model("Produto", produtoSchema);

const pequenoprincipe = new Produto({
    descricao : "Pequeno Príncipe",
    ano : 1943, 
    valor : 16,
    estoque : 1000
})

console.log(pequenoprincipe.descricao)
console.log(pequenoprincipe.ano)
console.log(pequenoprincipe.valor)
console.log(pequenoprincipe.estoque)
pequenoprincipe.save()

const itacoisa = new Produto({
    descricao : "It: A coisa",
    ano : 1986, 
    valor : 70,
    estoque : 500
})

console.log(itacoisa.descricao)
console.log(itacoisa.ano)
console.log(itacoisa.valor)
console.log(itacoisa.estoque)
itacoisa.save()