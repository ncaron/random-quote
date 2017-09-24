import axios from 'axios';

const URL = 'https://talaikis.com/api/quotes/random/';

export const FETCH_QUOTE = 'FETCH_QUOTE';

export function fetchQuote() {
  const request = axios.get(URL);

  return {
    type: FETCH_QUOTE,
    payload: request
  };
}
