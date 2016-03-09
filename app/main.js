import React from 'react';
import ReactDOM from 'react-dom'
import GroceryItemList from './components/GroceryItemList';

var initial = [
  {name: 'Ice Cream'},
  {name: 'Waffles'},
  {name: 'Candy', purchased: true},
  {name: 'Snarks'}
];

ReactDOM.render(<GroceryItemList items={initial}/>, document.getElementById('app'));
