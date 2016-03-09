import React from 'react';
import {connect} from 'react-redux';
import actions from '../stores/Actions.js';
import AddItem from '../components/AddItem';

const mapStateToProps = ()=>{
  return {};
};

const mapDispatchToProps = (dispatch)=>{
  return {
    addItem: (item)=>{
      dispatch(actions.addItem(item))
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AddItem);
