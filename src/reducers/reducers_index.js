import { combineReducers } from 'redux';
import ItemsReducer from './reducers_items.js';
import SelectedTagsReducer from './reducers_selectedTags.js';
import CartReducer from './reducers_cart.js';


const rootReducer = combineReducers({
  items: ItemsReducer,
  selectedTags: SelectedTagsReducer,
  cart: CartReducer,
});

export default rootReducer;
