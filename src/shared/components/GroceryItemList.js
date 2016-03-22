import React from 'react';
import GroceryItem from './GroceryItem';

export default class GroceryItemList {
  render(){
    let {items, removeItem, updateItem} = this.props;

    return (
      <div>
        <h1>Grocery Item List</h1>
        <div>
          {
            items.map(function(item,index){
              return (
                <GroceryItem key={index} removeItem={removeItem} updateItem={updateItem} item={item}/>
              );
            })
          }
        </div>
      </div>
    );
  }
}
