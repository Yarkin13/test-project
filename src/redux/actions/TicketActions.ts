import { Dispatch } from "redux";
import { TicketDispatchTypes } from "../../types/TicketActionType";
import { TICKET_FAIL, TICKET_LOADING, TICKET_SUCCESS } from "../types";
import { getTickets, initSearch } from "../../utils/fetchTickets";

export const GetTickets =
  () => async (dispatch: Dispatch<TicketDispatchTypes>) => {
    try {
      dispatch({
        type: TICKET_LOADING,
      });

      const searchId = await initSearch();
      const tickets = await getTickets(searchId);

      dispatch({
        type: TICKET_SUCCESS,
        payload: tickets
      });
    } catch (e) {
      dispatch({
        type: TICKET_FAIL,
      });
    }
  };
