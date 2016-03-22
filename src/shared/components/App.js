import React from 'react';
import GroceryItemListContainer from '../containers/GroceryItemListContainer';
import AddItemContainer from '../containers/AddItemContainer';

export default class App extends React.Component{
  render() {
    return (
      <div>
        <GroceryItemListContainer/>
        <AddItemContainer/>
      </div>
    );
  }
}
