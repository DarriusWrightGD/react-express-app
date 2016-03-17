import React from 'react';

export default function ({item, removeItem, updateItem}) {
  let purchaseText = 'Buy';
  let purchaseStyle = '';
  if(item.purchased){
    purchaseText = 'Unbuy';
    purchaseStyle = 'button-primary';
  }

  return (
    <div className='grocery-item row'>
      <div className='six columns'>
        <h4 className={item.purchased ? 'strikethrough' : ''}>{item.name}</h4>
      </div>
      <form className="three columns" onSubmit={(e)=>{
          e.preventDefault();
          item.purchased = !item.purchased;
          updateItem(item)
        }
      }>
        <button className={purchaseStyle}>{purchaseText}</button>
      </form>
      <form className="three columns" onSubmit={(e)=>{e.preventDefault();removeItem(item._id)}}>
        <button>&times;</button>
      </form>
    </div>
  );
}
