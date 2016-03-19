import express from 'express';
import path from 'path';
import parser from 'body-parser';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {RouterContext, match} from 'react-router';
import GroceryItem from './models/GroceryItem';
import GroceryItemList from './../shared/components/GroceryItemList';
import routes from './../shared/routes';
import {Provider} from 'react-redux';
import makeStore from './../shared/stores/makeStore';
import actions from './../shared/stores/Actions';

require('./database');

require("babel-core/register");
require("babel-polyfill");
require("babel-regenerator-runtime/runtime");

var app = new express();

app.get('/', (request,response)=>{
  const location = request.url;

  match({routes,location}, (error, redirectLocation, renderProps)=>{
    if(renderProps){
      const store = makeStore();
      store.dispatch(actions.fetchItems()).then(()=>{
        const componentHtml = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps}/>
          </Provider>
        );

        let reduxState = escape(JSON.stringify(store.getState()));
        response.render(path.join(__dirname,'../../views/index.ejs'), {html: componentHtml, reduxState});
      });
    }else{
      response.status(404).send('Not found');
    }
  });
})
.use(express.static(__dirname + './../client'))
.use('/styles', express.static(__dirname + './../../styles'))
.use('/babel-regenerator-runtime', express.static(__dirname + './../../node_modules/babel-regenerator-runtime'))
.use('/babel-polyfill', express.static(__dirname + './../../node_modules/babel-polyfill/dist'))
.use('/skeleton', express.static(__dirname + './../../bower_components/skeleton'))
.listen(3000);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require('./routes/items.js')(app);
