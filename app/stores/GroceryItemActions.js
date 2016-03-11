import Events from './Events';
import fetch from 'isomorphic-fetch';

const getItems = ()=>{
  return {
    type: Events.getItemsEvent,
  }
};

const recieveItems = (groceryItemList)=>{
  return {
    type: Events.recieveItemsEvent,
    groceryItemList
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
    let self = this;
    return dispatch =>{
      dispatch(getItems());
      return fetch('/api/items')
        .then(response => response.json())
        .then(json => dispatch(recieveItems(json)));
    }
  }
}
