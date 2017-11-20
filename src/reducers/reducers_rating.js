import {RATING_SELECTED} from '../actions/actions_index.js'
import {ratings} from '../data/data.js'

export default function (state = ratings,action){
    switch(action.type){
        case RATING_SELECTED:
            return {...state, [action.payload]:!state[action.payload]}
        default:
        return state
    }
}