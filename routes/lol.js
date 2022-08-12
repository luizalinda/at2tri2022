const lol = require ('../models/infos')

module.exports = (app)=>{
    //criar a rota para renderizar a view atividades
    app.get('/lol', async(req,res)=>{
    
    //buscar todas as atividades desse usuário 
   // var exluir = await lol.find({status:0}).sort({data:1}) //n sabemos yet
    var consumidas = await lol.find({ status:1}).sort({data:1})
    var vencidas = await lol.find({status:2}).sort({data:1}) //esse find q gera os dados
 

    })

    //gravar as informações
    app.post('/lol', async(req,res)=>{
        //recuperando as informações digitadas
        var dados = req.body
        //exibindo no terminal 
        console.log(dados)
        const conexao = require('../config/database')()
        //model atividades
        const lol = require('../models/lol')
        //salvar as informações do formulário no database
        var salvar = await new lol({
            validade:dados.validade,
            produto:dados.produto
        }).save()
//redirecionar para a rota atividades
res.redirect('/lol')
})

//vencidas
app.get("/vencidas", async(req,res)=>{
    //recuperar o parâmetro id da barra de endereço
    var excluir = await lol.findOneAndUpdate(//pd ser findOneAndDelete tbm, faz same coisa
        {status:2}
    )
    //redirecionar para a rota atividades
    res.redirect('/lol')
})

//consumidas
app.get("/consumidas", async(req,res)=>{
    //recuperar o parâmetro id da barra de endereço
    var consumidas = await lol.findOneAndUpdate(//pd ser findOneAndDelete tbm, faz same coisa 
        {status:1})
    //redirecionar para  a rota atividades
    res.redirect('/lol')
})


}
