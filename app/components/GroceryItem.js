import React from 'react';

export default function ({key,name, purchased}) {
  return (
    <div key={key}>
      <h4 className={purchased ? 'strikethrough' : ''}>{name}</h4>
    </div>
  );
}
