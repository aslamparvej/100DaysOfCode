const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/',function (req,res){
    res.send("<h1>Hey, Baby!</h1>")
});

app.get('/restaurants', function(req,res){
    const htmlFilePath =  path.join(__dirname,'views', 'restaurants.html');
    res.sendFile(htmlFilePath);
})



app.listen(3000);
