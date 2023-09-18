const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/agenda',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        serverSelectionTimeoutMS : 20000
    }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error : '))
db.once('open',function(){
    console.log("Estamos conectados ao mongoDB")
})

const contatoSchema = new mongoose.Schema({
    numero : Number,
    nome : String,
    idade : Number,
    email : String
})

const contatos = mongoose.model('Contatos', contatoSchema)

const epamin = new contatos({
    numero : 1,
    nome : 'Epaminondas',
    idade : 17,
    email : 'epa@gmail.com'
});
epamin.save();

const carla = new contatos({
    numero : 2,
    nome : 'Carla',
    idade : 18,
    email : 'carla@gmail.com'
});
carla.save();