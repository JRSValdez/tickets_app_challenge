import {FETCH_TICKETS} from '../actions/types';

const initialState = {
  tickets:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS:
      const { result } = action.payload;
      return {
        ...state,
        tickets:result,
      };
    default:
      return state;
  }
};

export default reducer;