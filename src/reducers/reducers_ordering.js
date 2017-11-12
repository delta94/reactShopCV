import {SET_ORDERING} from '../actions/actions_index.js';
import { startingOrdering } from '../data/data.js';

export default function (state = startingOrdering, action) {
  switch (action.type) {
    case SET_ORDERING:
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
}
