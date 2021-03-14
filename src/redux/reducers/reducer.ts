import {FETCH_TICKETS, API_END, API_START} from '../actions/types';
import {IState} from '../../utils/interfaces';
import {TicketsActionsType} from '../actions/types';

const initialState:IState = {
  tickets:[],
  info:{
    page:0,
    totalPages:0,
    totalRegisters:0
  },
  isLoading:false
};

const reducer = (state = initialState, action:TicketsActionsType):IState => {
  switch (action.type) {
    case FETCH_TICKETS:
      const res:IState = action.payload;
      return {
        ...state,
        tickets:res.tickets,
        info:res.info,
      };
    case API_START:
      return {
        ...state,
        isLoading:true,
      };
    case API_END:
      return {
        ...state,
        isLoading:false,
      };
    default:
      return state;
  }
};

export default reducer;