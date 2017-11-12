import {cart} from '../data/data.js';
import {ADD_TO_CART} from '../actions/actions_index.js'


export default function(state=cart,action){
    switch(action.type){
        case ADD_TO_CART:
            const updatedCartValue = state[action.payload]+1
            return {...state, [action.payload]:updatedCartValue}
        default:
            return state
    }
}