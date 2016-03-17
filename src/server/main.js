var express = require('express');
var path = require('path');
var parser = require('body-parser');
var React = require('react');
var ReactDOMServer = require('react-dom/server')
var GroceryItem = require('./models/GroceryItem');
var GroceryItemList = require('./../client/components/GroceryItemList');

require('./database');

var app = new express();
app.set('views', './../../views');

app.get('/', function(req,res){
    GroceryItem.find(function(error, doc){
      var generated = ReactDOMServer.renderToString(function(){
        return (<div></div>)//(<GroceryItemList items={doc}/>);
      }());
      res.render(path.join(__dirname,'../../views/index.ejs'), {reactOutput: generated});
    });
})
.use(express.static(__dirname + './../client'))
.use('/styles', express.static(__dirname + './../../styles'))
.use('/babel-polyfill', express.static(__dirname + './../../node_modules/babel-polyfill/dist'))
.use('/skeleton', express.static(__dirname + './../../bower_components/skeleton'))
.listen(3000);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require('./routes/items.js')(app);
