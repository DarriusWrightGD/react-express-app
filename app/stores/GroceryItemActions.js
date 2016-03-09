import Events from './Events';

module.exports = {
  addItem: (item)=>{
    return {
      type: Events.addItemEvent,
      item
    }
  }
}
