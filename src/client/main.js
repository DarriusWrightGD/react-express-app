import React from 'react';
import ReactDOM from 'react-dom'
import App from './../shared/components/App';
import appReducer from './../shared/stores/AppReducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import makeStore from './../shared/stores/makeStore';
import routes from './../shared/routes';

let reduxState;

if(window.__REDUX_STATE__){
  try{
    reduxState = JSON.parse(unescape(window.__REDUX_STATE__))
  }catch(e){
    console.log(e.message);
  }
}

const store = makeStore(reduxState);

const render = ()=>{
  ReactDOM.render(
    <Provider store={store}>
      {routes}
    </Provider>,
    document.getElementById('app'));
};
