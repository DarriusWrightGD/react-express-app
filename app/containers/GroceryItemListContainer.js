import React from 'react';
import {connect} from 'react-redux';
import actions from '../stores/Actions.js';
import GroceryItemList from '../components/GroceryItemList';

const mapStateToProps = (state)=>{
  return {
    items: state.groceryItemList
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    addItem: (item)=>{
      dispatch(actions.addItem(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItemList);
