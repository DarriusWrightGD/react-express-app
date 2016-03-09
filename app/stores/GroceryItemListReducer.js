import Events from './Events';
import _ from 'lodash';

var initialState = [
  {name: 'Ice Cream'},
  {name: 'Waffles'},
  {name: 'Candy', purchased: true},
  {name: 'Snarks'}
];


export default function (state = initialState, action){
  let newState;
  switch(action.type) {
    case Events.addItemEvent:
      newState = [
        ...state,
        action.item
      ]
      return newState;
    break;
    case Events.deleteItemEvent:
      newState = state.filter((item)=>{
        return item.name !== action.item.name;
      });
      return newState;
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
    default:
      return state;
  }
}
