import React from 'react';

export default function ({addItem}){
  let name;
  let submitItem = (e)=>{
    e.preventDefault();
    addItem({name: name.value});
    name.value = '';
  }

  return (
    <form onSubmit= {submitItem}>
      <input type='text' ref={(n) => name = n}/>
      <input type='submit' value='Add Item'/>
    </form>
  );
}
