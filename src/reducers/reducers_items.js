import { items ,initialStock} from '../data/data.js';
import { UPDATE_STOCK, RESET_STOCK } from '../actions/actions_index.js';


export default function (state = {...items}, action) {

  let itemToUpdate = state[action.payload]
  let updatedStock;
    
  switch (action.type) {
    case UPDATE_STOCK:
    
    
    updatedStock = itemToUpdate.stock-1
    
    if(updatedStock <= 0){
      itemToUpdate.stock = 0;
    } else{
      itemToUpdate.stock = updatedStock
    }
    
    return {...state, [action.payload]:itemToUpdate}

    case RESET_STOCK:

      updatedStock = initialStock[action.payload];
      itemToUpdate.stock = updatedStock
      return {...state, [action.payload]:itemToUpdate}    

    
    default:
      return state;
  }
}
