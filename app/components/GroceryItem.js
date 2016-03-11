import React from 'react';

export default function ({name, purchased, deleteItem, toggleItem}) {
  let purchaseText = 'Buy';
  let purchaseStyle = '';
  if(purchased){
    purchaseText = 'Unbuy';
    purchaseStyle = 'button-primary';
  }

  return (
    <div className='grocery-item row'>
      <div className='six columns'>
        <h4 className={purchased ? 'strikethrough' : ''}>{name}</h4>
      </div>
      <form className="three columns" onSubmit={(e)=>{e.preventDefault();toggleItem({name,purchased})}}>
        <button className={purchaseStyle}>{purchaseText}</button>
      </form>
      <form className="three columns" onSubmit={(e)=>{e.preventDefault();deleteItem({name})}}>
        <button>&times;</button>
      </form>
    </div>
  );
}
