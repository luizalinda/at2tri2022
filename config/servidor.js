const {urlencoded} = require("express")
const express = require("express")
const app = express()

//consign().include('./routes').into(app)

const porta = process.env.PORT || 4040

app.use(urlencoded({extended:false}))

module.exports = {app,porta}