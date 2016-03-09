import React from 'react';
import GroceryItemListContainer from '../containers/GroceryItemListContainer';
import AddItemContainer from '../containers/AddItemContainer';

export default function(){
  return (
    <div>
      <GroceryItemListContainer/>
      <AddItemContainer/>
    </div>
  );
};
