import { items } from '../data/data.js';
import { UPDATE_STOCK } from '../actions/actions_index.js';


export default function (state = { ...items }, action) {
  switch (action.type) {
    case UPDATE_STOCK:
    console.log('updating stock');
    
    //update the stock on the item
    const itemToUpdate = state[action.payload]
    
    if(itemToUpdate.stock-- < 0){
      itemToUpdate.stock = 0;
    } else{
      itemToUpdate.stock--
    }
    
    return {...state, [action.payload]:itemToUpdate}
    
    default:
      return state;
  }
}
