import { ITicket } from "./../../types/TicketTypes";
import { TICKET_FAIL, TICKET_LOADING, TICKET_SUCCESS } from "./../types";
import { TicketDispatchTypes } from "./../../types/TicketActionType";
interface IDefaultState {
  loading: boolean;
  tickets: ITicket[];
}

const defaultState: IDefaultState = {
  loading: false,
  tickets: [
    {
      price: 0,
      carrier: "string",
      segments: [
        {
          origin: "string",
          destination: "string",
          date: "string",
          stops: ["string"],
          duration: 0,
        },
        {
          origin: "string",
          destination: "string",
          date: "string",
          stops: ["string"],
          duration: 0,
        },
      ],
    },
  ],
};

const ticketsReducer = (
  state: IDefaultState = defaultState,
  action: TicketDispatchTypes
): IDefaultState => {
  switch (action.type) {
    case TICKET_FAIL:
      return {
        ...state,
        loading: false,
      };
    case TICKET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TICKET_SUCCESS:
      return {
        loading: false,
        tickets: action.payload,
      };
    default:
      return state;
  }
};

export default ticketsReducer;
