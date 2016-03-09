import React from 'react';
import GroceryItem from './GroceryItem';

export default function({items, addItem}){
  let name;

  return (
    <div>
      <h1>Grocery Item List</h1>
      <form onSubmit= {()=>{addItem({name: name.value})}}>
        <input type='text' ref={(n) => name = n}/>
        <input type='submit' value='Add Item'/>
      </form>
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
