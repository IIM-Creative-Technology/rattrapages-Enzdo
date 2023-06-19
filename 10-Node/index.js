const express = require('express');

const serveur = express();

serveur.get('/', function (req, res){
    res.setHeader("Content-Type","text/html")
    res.status(200).send('<h1> Bonjour mon serveur </h1>')
})


serveur.listen(3001, function(){
    console.log('le serveur est bien lancer')
})