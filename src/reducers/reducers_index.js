import { combineReducers } from 'redux';
import ItemsReducer from './reducers_items.js';
import SelectedTagsReducer from './reducers_selectedTags.js';
import CartReducer from './reducers_cart.js';
import OrderingReducer from './reducers_ordering.js'


const rootReducer = combineReducers({
  items: ItemsReducer,
  selectedTags: SelectedTagsReducer,
  cart: CartReducer,
  selectedOrdering: OrderingReducer
});

export default rootReducer;
