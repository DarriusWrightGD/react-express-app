import {createStore} from 'redux';
import groceryItemList from 'src/shared/stores/GroceryItemListReducer';
import Events from 'src/shared/stores/Events';

describe('GroceryItemListReducer', ()=>{
  describe('requestAddItem',()=>{
    let initialState;

    beforeEach(()=>{
      initialState = [];
    });

    it('should add the item when the requestAddItemEvent is passed', ()=>{
      let item = {};
      let newState = groceryItemList(initialState, {
        type: Events.requestAddItemEvent,
        item
      });

      expect(newState.length).to.equal(initialState.length+1);
    });
  });

  describe('requestDeleteItem', ()=>{
    let initialState;
    let id = 'foo_id';

    beforeEach(()=>{
      initialState = [{_id: id}];
    });

    it('should delete the item when the requestDeleteItemEvent is passed', ()=>{
      let newState = groceryItemList(initialState, {
        type: Events.requestDeleteItemEvent,
        id
      });

      expect(newState.length).to.equal(initialState.length-1);
    })
  });

  describe('requestUpdateItem', ()=>{
    let initialState;
    let id = 'foo_id';

    beforeEach(()=>{
      initialState = [{
        _id: id,
        purchased: false
      }]
    });

    it('should update the item when the requestUpdateItemEvent is passed', ()=>{
      let changedItem = {
        _id:id,
        purchased: true
      }

      let newState = groceryItemList(initialState, {
        type: Events.requestUpdateItemEvent,
        item: changedItem
      });

      let currentItem = newState.find((item)=>{
          return item._id === id;
      });

      expect(currentItem.purchased).to.equal(true);
    });

    describe('recieveItems', ()=>{
      let initialState;
      let id = 'foo_id';
      beforeEach(()=>{
        initialState = [];
      });

      it('should return items when recieveItemsEvent is passed', ()=>{
        let newGroceryItemList =  [{
          _id:id
        }];

        let newState = groceryItemList(initialState,{
          type: Events.recieveItemsEvent,
          groceryItemList: newGroceryItemList
        });

        expect(newState).to.equal(newGroceryItemList);
      });
    });
  })
});
