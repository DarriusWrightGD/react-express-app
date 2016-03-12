import Events from './Events';

export default (state=false, action)=>{
  switch (action.type) {
    case Events.requestDeleteItem:
      return true;
      break;
    case Events.deleteItemEvent:
      return false;
    default:
      return state;
  }
};
