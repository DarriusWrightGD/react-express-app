import Events from './Events';
import _ from 'lodash';


export default function (state = [], action){
  let newState;
  switch(action.type) {
    case Events.requestAddItemEvent:
      return [
        ...state,
        action.item
      ];
    break;
    case Events.requestDeleteItemEvent:
      return state.filter((item)=>{
        return item.name !== action.item.name;
      });
    break;
    case Events.requestUpdateItemEvent:
      let itemIndex = _.findIndex(state, (i)=>{
        return i.name === action.item.name;
      });

      newState = _.cloneDeep(state);
      newState[itemIndex]= action.item;

      return newState;
    break;
    case Events.recieveItemsEvent:
      return action.groceryItemList;
    break;
    default:
      return state;
  }
}
