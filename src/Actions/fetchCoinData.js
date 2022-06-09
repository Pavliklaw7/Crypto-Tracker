import axios from 'axios';
import { apiBaseUrl } from '../Utils/Constants';
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_ERROR,
} from '../Utils/ActionTypes.js';

export default function FetchCoinData() {
  return dispatch => {
    dispatch({ type: FETCHING_COIN_DATA })

    return axios.get(`${apiBaseUrl}/v1/cryptocurrency/listings/latest?start=1&limit=10`, {
      headers: {
        'X-CMC_PRO_API_KEY': 'c9d9019c-2fbe-43ab-a2ef-df76e4a18095'
      }
    })
      .then(res => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data.data })
      })
      .catch(err => {
        dispatch({ type: FETCHING_COIN_DATA_ERROR, payload: err.data })
      })
  }
}