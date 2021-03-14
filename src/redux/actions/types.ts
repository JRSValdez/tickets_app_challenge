import {IState} from '../../utils/interfaces';

export const FETCH_TICKETS:string = "FETCH_TICKETS";
export const API_START:string = "API_START";
export const API_END:string = "API_END";

interface IFetchTickets{
    type: typeof FETCH_TICKETS
    payload:any
}

interface IAPIStart{
    type: typeof API_START
    payload:any
}

interface IAPIEnd{
    type: typeof API_END
    payload:any
}

export type TicketsActionsType = IFetchTickets | IAPIEnd | IAPIStart; 
