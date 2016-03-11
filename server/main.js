var express = require('express');
var path = require('path');
var parser = require('body-parser');

var app = new express();

app.get('/', function(req,res){
    res.render('./../app/index.ejs', {});
})
.use(express.static(__dirname + './../public'))
.use('/babel-polyfill', express.static(__dirname + './../node_modules/babel-polyfill/dist'))
.use('/skeleton', express.static(__dirname + './../bower_components/skeleton'))
.listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require('./routes/items.js')(app);
