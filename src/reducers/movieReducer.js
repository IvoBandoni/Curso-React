 import { FETCH_MOVIE_DETAILS } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
     case FETCH_MOVIE_DETAILS:
       return action.payload;
    case 'FETCH_MOVIE_REQUEST':
      return { ...state };
    case 'FETCH_MOVIE_SUCCESS':
      return { ...state, movie: action.payload };
    case 'FETCH_MOVIE_FAILURE':
      return { ...state, errorMessage: action.payload.error };
    case 'CLEAR_MOVIE':
      return {};
    default:
      return state;
  }
};


