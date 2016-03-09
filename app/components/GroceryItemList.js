import React from 'react';
import GroceryItem from './GroceryItem';

export default function({items, deleteItem, toggleItem}){
  return (
    <div>
      <h1>Grocery Item List</h1>
      <div>
        {
          items.map(function(item,index){
            return (
              <GroceryItem key={index} deleteItem={deleteItem} toggleItem={toggleItem} {...item}/>
            );
          })
        }
      </div>
    </div>
  );
}
