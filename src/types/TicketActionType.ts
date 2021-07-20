import { TICKET_LOADING, TICKET_FAIL, TICKET_SUCCESS } from "../redux/types";
export interface TicketLoading {
  type: typeof TICKET_LOADING;
}

export interface TicketFail {
  type: typeof TICKET_FAIL;
}

export interface TicketSuccess {
  type: typeof TICKET_SUCCESS;
  payload: any;
}

export type TicketDispatchTypes = TicketLoading | TicketFail | TicketSuccess;
