import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App';
import appReducer from './stores/AppReducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

var store = createStore(appReducer);

const render = ()=>{
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app'));
}

store.subscribe(render);
render()
