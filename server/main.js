var express = require('express');
var path = require('path');

var app = new express();

app.get('/', function(req,res){
    res.render('./../app/index.ejs', {});
})
.use(express.static(__dirname + './../public'))
.listen(7777);