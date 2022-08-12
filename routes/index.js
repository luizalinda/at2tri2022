module.exports = (app)=>{
    app.get('/', async (req,res)=>{
        const { produto, conexao } = require("../config/database")

            conexao()

        //let resultadoAll = null
        //if(!ordem || ordem==2){
         //   resultadoAll = await produto.find().sort({validade:1})
       // }else{
        //    resultadoAll = await produto.find().sort({produto:1})
       // }
   
       // console.log(resultadoAll)
       // res.render('/index.ejs',{resultadoAll})

       const resultado = await produto.find()
       res.render('index.ejs',{resultado})
    })

    app.set('../views/index.ejs')
}