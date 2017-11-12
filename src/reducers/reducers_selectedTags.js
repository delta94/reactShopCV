import {CATEGORY_FILTER_APPLIED} from '../actions/actions_index.js';
import {tags} from '../data/data.js'
import _ from 'lodash'

export default function (state = tags, action) {
  const key = action.payload;

  switch (action.type) {
    case CATEGORY_FILTER_APPLIED:
    //copy state but change the boolean value of the changed tag
    return {...state,[key]:{description:key,selected:!state[key].selected}};

    default:
      return state;
  }
}
