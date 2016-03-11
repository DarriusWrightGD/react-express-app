import groceryItemList from './GroceryItemListReducer';
import isFetching from './FetchingItemsReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  isFetching,
  groceryItemList
});
