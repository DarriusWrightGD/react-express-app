import Events from './Events';
import _ from 'lodash';


export default function (state = [], action){
  let newState;
  switch(action.type) {
    case Events.addItemEvent:
      return [
        ...state,
        action.item
      ];
    break;
    case Events.deleteItemEvent:
      return state.filter((item)=>{
        return item.name !== action.item.name;
      });
    break;
    case Events.toggleItemEvent:
      let itemIndex = _.findIndex(state, (i)=>{
        return i.name === action.item.name;
      });

      newState = _.cloneDeep(state);
      let item = newState[itemIndex];
      item.purchased = !item.purchased;

      return newState;
    break;
    case Events.recieveItemsEvent:
      return action.groceryItemList;
    break;
    default:
      return state;
  }
}
