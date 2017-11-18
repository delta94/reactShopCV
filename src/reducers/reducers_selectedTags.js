import {CATEGORY_FILTER_APPLIED,IS_PAGE_CHANGE} from '../actions/actions_index.js';
import {tags} from '../data/data.js'
import _ from 'lodash'

export default function (state = tags, action) {
  const key = action.payload;
  switch (action.type) {
    case CATEGORY_FILTER_APPLIED:
      const updatedTypes = {...state.types , [key]:{description:key,selected:!state.types[key].selected}}
      return {types:updatedTypes, tagChange:true}
    case IS_PAGE_CHANGE:
      return {...state, tagChange:false}
    default:
      return state;
  }
}
