const express = require('express');


let app = express();
app.use(express.static('public'));


app.get("/", function(req, res){
});

app.listen(3040, function(){

});
