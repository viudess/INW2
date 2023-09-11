const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/escola',
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

const alunoSchema = new mongoose.Schema({
    matricula : String,
    nome : String,
    idade : Number,
    turma : String
})

const Alunos = mongoose.model('Alunos', alunoSchema)

const carlos = new Alunos({
    matricula : 'rm501',
    nome : 'Carlos',
    idade : 18,
    turma : '2MIB'
});
carlos.save();
const maria = new Alunos({
    matricula : 'rm510',
    nome : 'Maria',
    idade : 17,
    turma : '2MIB'
});
maria.save();