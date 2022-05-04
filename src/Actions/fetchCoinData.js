import axios from 'axios';
import { apiBaseUrl } from './../Utils/Constants';

export default function fetchCoinData() {
  return dispatch => {
    dispatch({ type: FETCHING_COIN_DATA })

    return axios.get(`${apiBaseUrl}`)
  }
}