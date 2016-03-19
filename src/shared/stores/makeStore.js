import http from '../helpers/http';
import {createStore, applyMiddleware} from 'redux';
import appReducer from './AppReducer';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import actions from './Actions';

const loggerMiddleware = createLogger();

export default (initialState)=>{
  let store = createStore(appReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  return store;
};
