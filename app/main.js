import React from 'react';
import ReactDOM from 'react-dom'
import GroceryItemList from './components/GroceryItemList';

var app = document.getElementById('app');
console.log(app);
ReactDOM.render(<GroceryItemList/>, app);
