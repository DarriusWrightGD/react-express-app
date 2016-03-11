import Events from './Events';
import fetch from 'isomorphic-fetch';

const requestItems = ()=>{
  return {
    type: Events.requestItemsEvent,
  }
};

const recieveItems = (groceryItemList)=>{
  return {
    type: Events.recieveItemsEvent,
    groceryItemList
  }
};

const unableToRecieveItems = (errorMessage)=>{
  return {
    type: Events.unableToRecieveItems,
    errorMessage
  }
};


module.exports = {
  addItem: (item)=>{
    return {
      type: Events.addItemEvent,
      item
    }
  },

  deleteItem: (item)=>{
    return {
      type: Events.deleteItemEvent,
      item
    }
  },

  toggleItem: (item)=>{
    return {
      type: Events.toggleItemEvent,
      item
    }
  },

  fetchItems: ()=>{
    return async (dispatch) =>{
      dispatch(requestItems());
      try{
        let response = await fetch('/api/items');
        let json = await response.json();
        return dispatch(recieveItems(json));
      }catch(e){
        return dispatch(unableToRecieveItems(e.message));
      }
    }
  }
}
