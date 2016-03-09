import React from 'react';

export default function ({name, purchased, deleteItem, toggleItem}) {
  let purchaseText = purchased ? 'Unbuy' : 'Buy';

  return (
    <div>
      <div>
        <h4 className={purchased ? 'strikethrough' : ''}>{name}</h4>
      </div>
      <form className="" onSubmit={(e)=>{e.preventDefault();deleteItem({name})}}>
        <button>&times;</button>
      </form>
      <form className="" onSubmit={(e)=>{e.preventDefault();toggleItem({name,purchased})}}>
        <button>{purchaseText}</button>
      </form>
    </div>
  );
}
