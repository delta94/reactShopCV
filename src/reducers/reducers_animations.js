import {FIRST_TIME_VISIT} from '../actions/actions_index'

export default (state=true,action) => {
    switch(action.type){
        case(FIRST_TIME_VISIT):
        return false
    }
    return state
}