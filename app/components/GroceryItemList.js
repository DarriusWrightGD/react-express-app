import React from 'react';
import GroceryItem from './GroceryItem';

export default function({items, removeItem, updateItem}){
  return (
    <div>
      <h1>Grocery Item List</h1>
      <div>
        {
          items.map(function(item,index){
            return (
              <GroceryItem key={index} removeItem={removeItem} updateItem={updateItem} {...item}/>
            );
          })
        }
      </div>
    </div>
  );
}
