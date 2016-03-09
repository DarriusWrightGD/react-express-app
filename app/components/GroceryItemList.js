import React from 'react';
import GroceryItem from './GroceryItem';

export default function({items}){
  return (
    <div>
      <h1>Hello GroceryItemList</h1>
      <div>
        {
          items.map(function(item,index){
            return (
              <GroceryItem key={index} {...item}/>
            );
          })
        }
      </div>
    </div>
  );
}
