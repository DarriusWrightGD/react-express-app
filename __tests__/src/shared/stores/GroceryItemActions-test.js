import GroceryItemActions from 'src/shared/stores/GroceryItemActions';
import configureStore from 'redux-mock-store';
import Events from 'src/shared/stores/Events';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import http from 'src/shared/helpers/http';

const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware];
const mockStore = configureStore(middleware);

describe('GroceryItemActions', ()=>{
  describe('fetchItems', ()=>{
    let initialState;

    beforeEach(()=>{
      initialState = {}
    })

    afterEach(()=>{

    })

    it('should get the items',(done)=>{
      const groceryItemList = [];
      const expectedActions = [{
        type: Events.requestItemsEvent
      }, {
        type: Events.recieveItemsEvent,
        groceryItemList
      }]

      sinon.stub(http, 'get', (url)=>{
        return Promise.resolve({
          json: ()=>{
            return Promise.resolve(groceryItemList);
          }
        });
      });

      const store = mockStore(initialState, expectedActions,done);
      store.dispatch(GroceryItemActions.fetchItems()).then(()=>{
        const storeActions = store.getActions();
        expect(storeActions[0]).to.deep.equal(expectedActions[0]);
        expect(storeActions[1]).to.deep.equal(expectedActions[1]);
      }).then(done);
    });
  });
});
