import Events from './Events';

export default (state=false, action)=>{
  switch(action.type){
    case Events.getItemsEvent:
      return true;
    break;
    case Events.recieveItemsEvent:
      return false;
    break;
    default:
      return state;
  }
}
