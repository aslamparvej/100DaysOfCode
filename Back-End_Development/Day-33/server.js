const express = require('express');

const app = express();

app.get('/answer', function (req,res){
    res.send("I am fine. What is your condition?");
})
app.get('/', function (req,res){
    res.send("<h1>Hey!, How are your?")
})

app.listen(3000);