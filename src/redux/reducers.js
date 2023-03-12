import { combineReducers } from 'redux';
import { ADD_LISTING, DELETE_LISTING } from './actions';

const initialState = {
  listings: [],
};

function listingsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LISTING:
      return {
        ...state,
        listings: [...state.listings, action.payload],
      };
    case DELETE_LISTING:
      return {
        ...state,
        listings: state.listings.filter(
          (listing, index) => index !== action.payload
        ),
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  listings: listingsReducer,
});

export default rootReducer;
