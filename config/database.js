//const express = require('express')
//const app = express()

const mongoose = require('mongoose')

const conexao = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userAT:AT2TRI@fiaptecnico.yk90q.mongodb.net/test')
}

const modelo = mongoose.Schema({
    produto:String,
    validade:Date
})

const produto = mongoose.model('produto',modelo)

module.exports={conexao,produto}