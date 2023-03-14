const express = require ("express") // importando o express
const app = express() // iniciando e passando para a variavel app

/* app.get('/',function(requisicao, resposta){
    resposta.send('Bem vindo ao Express')
})

app.get('/blog',function(requisicao, resposta){
    resposta.send('Bem vindo ao Blog !!!')
}) */

//dizendo para o express usar o EJS com o view engine
app.set('view engine','ejs')

//rota


app.get('/',(req,res) =>{
    var nome = 'Gabriel Brosig'
    var lang = 'JavaScript'
    
    
    res.render('index',{
        nome: nome,
        lang: lang,
        empresa: 'OctaAgro'
    });

});

app.listen(3000,()=>{console.log('App rodando')})