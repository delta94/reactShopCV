import { filteredItems } from '../data/data.js';
import { items, cart, test } from '../data/data.js';
import { CATEGORY_FILTER_APPLIED } from '../actions/actions_index.js';
import _ from 'lodash';

export default function (state = items, action) {
  switch (action.type) {
    case CATEGORY_FILTER_APPLIED:
      // if tag is selected remove it
      // if tag is not selected add it
      return _.filter(items, item => item.tag === action.payload);
    default:
      return state;
  }
}
