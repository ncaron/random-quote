import { FETCH_QUOTE } from '../actions/index';

export default function(state = { quote: 'Loading...' }, action) {
  switch(action.type) {
    case FETCH_QUOTE:
      return action.payload.data;
  }
  return state;
}
