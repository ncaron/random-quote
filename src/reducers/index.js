import { combineReducers } from 'redux';
import QuoteReducer from './quote_reducer';

const rootReducer = combineReducers({
  quoteData: QuoteReducer
});

export default rootReducer;
