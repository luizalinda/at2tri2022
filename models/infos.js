const mongoose = require('mongoose')

//criar a estrutura para o armazenamento das informações das atividades
const modelo = mongoose.Schema({
    validade:Date,
    produto:String,
    status:{type:Number, default:0}
})

//gravar a estrutura na model atividades
const lol = mongoose.model('lol', modelo)

//exportar os dados para acesso externo

module.exports = lol