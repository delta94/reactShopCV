import {MEMORIZE_LAST_PAGE} from '../actions/actions_index.js';

export default function (state = 1 , action){
    switch(action.type){
        case MEMORIZE_LAST_PAGE:
            return action.payload;
        default:
            return state
    }
}