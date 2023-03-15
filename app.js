const express = require('express');
const bodyParser = require ('body-parser');
const ejs = require ('ejs');

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extend: true}));

app.get('/',(req,res)=>{
    res.render('idade');
});

app.post('/',(req,res) => {
    const nome = req.body.nome;
    var idade = req.body.idade;
    var msg="";
    if (0<=idade && idade<15) {msg="Criança"} else if (idade >=15 && idade < 30) {msg="Jovem"} 
    else if (idade >=30 && idade < 60) {msg="Adulto"} else {msg="Idoso"} 
    //alert()
    //document.write
    
    
    res.render('cadastroidade',{nome: nome, idade: idade, msg: msg})
})

app.post('/notas',(req,res) => {
    const nota1 = req.body.nota1;
    const nota2 = req.body.nota2;
    const nota3 = req.body.nota3;
    var media=((2*nota1)+(5*nota2)+(3*nota3))/10
    var classificacao="";
    if  (media>=0 && media <5) {classificacao="F"} else if (media >=5 && media < 6) {classificacao="E"} else if (media>=6 && media <7) {classificacao="D"} else if (media>=7 && media <8) {classificacao="C"} else if (media>=8 && media <9) {classificacao="B"} else if (media>=9 && media <10) {classificacao="A"}

    //alert()
    //document.write
    
    
    res.render('notas',{nota1: nota1, nota2: nota2, nota3: nota3,media: media, classificacao: classificacao})
})

app.post('/entrecomnome',(req,res)=>{
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome;
    var idade = req.body.idade;
    var pais = req.body.pais;

    res.render('entrecomnome',{nome: nome , sobrenome: sobrenome, idade: idade, pais: pais})
})



app.listen(3000,()=>{
    console.log('Servidor rodando')
})