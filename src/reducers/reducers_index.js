import { combineReducers } from 'redux';
import ItemsReducer from './reducers_items.js';
import SelectedTagsReducer from './reducers_selectedTags.js';
import CartReducer from './reducers_cart.js';
import OrderingReducer from './reducers_ordering.js';
import MenuEnteringAnimationReducer from './reducers_animations';
import LastPageVisitedReducer from './reducers_pagination.js'
import SelectedRatingsReducer from '../reducers/reducers_rating.js'


const rootReducer = combineReducers({
  items: ItemsReducer,
  selectedTags: SelectedTagsReducer,
  selectedRatings: SelectedRatingsReducer,
  cart: CartReducer,
  selectedOrdering: OrderingReducer,
  firstTimeVisit: MenuEnteringAnimationReducer,
  lastVisitedPage: LastPageVisitedReducer
});

export default rootReducer;
