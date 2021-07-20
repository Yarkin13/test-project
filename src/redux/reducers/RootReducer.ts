import { combineReducers } from "redux";
import filterTicketReducer from "./FilterTicketReducer";
import sortTicketReducer from "./SortTicketReducer";
import ticketsReducer from "./TitcketReducer";

const RootReducer = combineReducers({
  tickets: ticketsReducer,
  filterTickets: filterTicketReducer,
  sortTickets: sortTicketReducer,
});

export default RootReducer;
