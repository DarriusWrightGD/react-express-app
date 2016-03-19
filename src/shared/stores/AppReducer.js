import groceryItemList from './GroceryItemListReducer';
import fetchingItems from './FetchingItemsReducer';
import removingItem from './RemovingItemReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  fetchingItems,
  removingItem,
  groceryItemList
});
