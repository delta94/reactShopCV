import {items,test} from '../data/data.js';
import {ADD_TO_CART} from '../actions/actions_index.js'


export default function(state=[],action){
    switch(action.type){
        case ADD_TO_CART:
            console.log('in cart reducer');
            return [...state,action.payload];
        default:
            return state
    }
}