const express = require('express');
const chalk = require('chalk');

let name = "";
let app = express();

app.get('/hello', function(req, res){
  res.send("Hello");
});


app.get('/goodbye', function(req, res){
  res.send("goodbye");
});

app.listen(1337, function(){
  console.log("Hey, its working");
})
