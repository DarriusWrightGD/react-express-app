import Events from './Events';

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
  }
}
