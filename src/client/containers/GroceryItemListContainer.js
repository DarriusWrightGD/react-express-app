import React from 'react';
import {connect} from 'react-redux';
import actions from '../stores/Actions.js';
import GroceryItemList from '../components/GroceryItemList';

const mapStateToProps = (state)=>{
  return {
    items: state.groceryItemList
  };
};

const mapDispatchToProps = (dispatch)=>{
  return {
    removeItem: (id)=>{
      dispatch(actions.removeItem(id));
    },
    updateItem: (item)=>{
      dispatch(actions.updateItem(item));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItemList);
