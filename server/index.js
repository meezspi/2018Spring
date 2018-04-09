var express = require('express')
var app = express()

const servername = "localhost";
const port = 8080;

const simple = require('./simpleController');
const game = require('./game/controller');

app
    .use('/', (req,res,next) =>{
        res.header("Access-Control-Allow-Origin","*")
        res.header("Access-Control-Allow-Headers", "*")
        next();
    })
    .use('/simple',simple)
    .use('/game',game)
    .listen(port);

console.log("running on http://" + servername + ":" + port)