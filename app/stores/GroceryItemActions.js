import Events from './Events';
import fetch from 'isomorphic-fetch';
import http from '../helpers/http';

const url = '/api/items';

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

const fetchItems = ()=>{
  return async (dispatch) =>{
    dispatch(requestItems());
    try{
      let response = await http.get(url);
      let json = await response.json();
      return dispatch(recieveItems(json));
    }catch(e){
      return dispatch(unableToRecieveItems(e.message));
    }
  };
};

const requestDeleteItem = (item)=>{
  return {
    type: Events.requestDeleteItemEvent,
    item
  }
};

const deleteItem = ()=>{
  return {
    type: Events.deleteItemEvent,
  }
};

const removeItem = (item)=>{
  return async (dispatch)=>{
    dispatch(requestDeleteItem(item));
    try{
      let response = await http.delete(url, item);
      return dispatch(deleteItem());
    }catch(e){
      return dispatch(fetchItems());
    }
  }
};

const requestItemUpdate = (item)=>{
  return {
    type: Events.requestUpdateItemEvent,
    item
  };
};

const updateItemComplete = ()=>{
  return {
    type: Events.updateItemCompleteEvent
  };
};

const updateItem= (item)=>{
  return async (dispatch)=>{
    dispatch(requestItemUpdate(item));
    try{
      console.log('Item',item);
      await http.put(url,item);
      console.log('Done');
      return dispatch(updateItemComplete());
    }catch(e){
      return dispatch(fetchItems());
    }
  };
};

const requestAddItem= (item)=>{
  return {
    type: Events.requestAddItemEvent,
    item
  };
};

const addItemComplete= ()=>{
  return {
    type: Events.addItemCompleteEvent
  };
};

const addItem= (item)=>{
  return async (dispatch)=>{
    dispatch(requestAddItem());
    try{
      await http.post(url,item);
      return dispatch(addItemComplete());
    }catch(e){
      return dispatch(fetchItems());
    }
  }
}

module.exports = {
  addItem,
  removeItem,
  updateItem,
  fetchItems
}
