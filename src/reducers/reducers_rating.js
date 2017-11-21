import {RATING_SELECTED, IS_PAGE_CHANGE} from '../actions/actions_index.js'
import {ratings} from '../data/data.js'

export default function (state = ratings,action){
    switch(action.type){
        case RATING_SELECTED:
            const updatedRatings = {...state.rates, [action.payload]:!state.rates[action.payload]}
            return {rates:updatedRatings , isRatingChange:true}
        case IS_PAGE_CHANGE:
            return {...state, isRatingChange:false}
        default:
        return state
    }
}