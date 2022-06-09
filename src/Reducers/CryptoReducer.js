import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_ERROR,
} from './../Utils/ActionTypes.js';

const initialState = {
  isFatching: null,
  data: [],
  hasError: false,
  errorMessage: null
}

export default function (state = initialState, action) {

  switch (action.type) {
    case FETCHING_COIN_DATA:
      return Object.assign({}, state, {
        isFatching: true,
        data: [],
        hasError: false,
        errorMessage: null
      });

    case FETCHING_COIN_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFatching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null
      });

    case FETCHING_COIN_DATA_ERROR:
      return Object.assign({}, state, {
        isFatching: false,
        data: action.payload,
        hasError: true,
        errorMessage: action.err
      });

    default:
      return state
  }
}
