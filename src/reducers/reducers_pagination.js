import {MEMORIZE_LAST_PAGE,SET_ACTIVE_PAGE} from '../actions/actions_index.js';

export default function (state = 1 , action){

    switch(action.type){
        case MEMORIZE_LAST_PAGE:
            return action.payload;
        case SET_ACTIVE_PAGE:
            console.log('setting active page to ' , action.payload);
            return action.payload
        default:
            return state
    }
}