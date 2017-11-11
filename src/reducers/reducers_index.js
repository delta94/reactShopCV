import { combineReducers } from 'redux';
import ItemsReducer from './reducers_items.js';
import SelectedTagsReducer from './reducers_selectedTags.js';
import FilteredItemsReducer from './reducers_filteredItems.js';
import CartReducer from './reducers_cart.js';


const rootReducer = combineReducers({
  items: ItemsReducer,
  filteredItems: FilteredItemsReducer,
  selectedTags: SelectedTagsReducer,
  cart: CartReducer,
});

export default rootReducer;
