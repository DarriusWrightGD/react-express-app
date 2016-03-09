import Events from './Events';
var initialState = [
  {name: 'Ice Cream'},
  {name: 'Waffles'},
  {name: 'Candy', purchased: true},
  {name: 'Snarks'}
];


export default function (state = initialState, action){
  switch(action.type) {
    case Events.addItemEvent:
      var newState = [
        ...state,
        action.item
      ]
      return newState;
    break;
    default:
      return state;
  }
}
