import React from 'react';

export default function ({addItem}){
  let name;
  let submitItem = (e)=>{
    e.preventDefault();
    let itemName = name.value;
    addItem({name: itemName});
    //name.reset();
  }

  return (
    <form onSubmit= {submitItem}>
      <input type='text' ref={(n) => name = n}/>
      <input type='submit' value='Add Item'/>
    </form>
  );
}
