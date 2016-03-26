jest.autoMockOn();
jest.mock('./../../../../src/shared/helpers/http');
import http from './../../../../src/shared/helpers/http'
//var http = require('./../../../../src/shared/helpers/http');

jest.unmock('./../../../../src/shared/stores/GroceryItemActions');
jest.unmock('./../../../../src/shared/stores/Events');


import GroceryItemActions from './../../../../src/shared/stores/GroceryItemActions';
import configureStore from 'redux-mock-store';
import Events from './../../../../src/shared/stores/Events';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware, loggerMiddleware];
const mockStore = configureStore(middleware);

describe('GroceryItemActions', ()=>{
  describe('fetchItems', ()=>{
    let initialState;

    beforeEach(()=>{
      initialState = {}
    })


    it('should get the items',(done)=>{
      const expectedActions = [{
        type: Events.requestItemsEvent
      }, {
        type: Events.recieveItemsEvent
      }]

      console.log('mocked http: ',http);
      const store = mockStore(initialState, expectedActions,done);
      store.dispatch(GroceryItemActions.fetchItems());
    });
  });
});
