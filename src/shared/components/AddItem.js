import React from 'react';

export default class AddItem extends React.Component{
  render(){
    let {addItem} = this.props;
    let name;
    let submitItem = (e)=>{
      e.preventDefault();
      let itemName = name.value;
      addItem({name: itemName});
      name.reset();
    }

    return (
      <form onSubmit= {submitItem}>
        <input type='text' ref={(n) => name = n}/>
        <input type='submit' value='Add Item'/>
      </form>
    );
  }
}
