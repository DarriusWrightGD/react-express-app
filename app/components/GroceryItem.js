import React from 'react';

export default function ({name, purchased, removeItem, updateItem}) {
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
      <form className="three columns" onSubmit={(e)=>{e.preventDefault();updateItem({name,purchased: !purchased})}}>
        <button className={purchaseStyle}>{purchaseText}</button>
      </form>
      <form className="three columns" onSubmit={(e)=>{e.preventDefault();removeItem({name})}}>
        <button>&times;</button>
      </form>
    </div>
  );
}
