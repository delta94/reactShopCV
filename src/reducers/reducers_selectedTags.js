import {CATEGORY_FILTER_APPLIED} from '../actions/actions_index.js';
import {tags} from '../data/data.js'
import _ from 'lodash'

export default function (state = tags, action) {
  const key = action.payload;
  switch (action.type) {
    case CATEGORY_FILTER_APPLIED:
      const updatedTypes = {...state.types , [key]:{description:key,selected:!state.types[key].selected}}
      console.log('reducer returning' ,{types:updatedTypes, tagChange:true} );
      return {types:updatedTypes, tagChange:true}
    default:
      return state;
  }
}
