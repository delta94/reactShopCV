import CATEGORY_FILTER_APPLIED from '../actions/actions_index.js';

export default function (state = [], action) {
  switch (action.type) {
    case CATEGORY_FILTER_APPLIED:
      console.log('in tags reducer');
      console.log(action);
      return [...action.payload];
    default:
      return state;
  }
}
