import { TabAliases, ISortTicket } from "./../../types/TicketTypes";
import { CHANGE_TAB } from "./../types";
import { SortTicketDispatchTypes } from "../../types/SortActionType";
interface IDefaultState extends ISortTicket {}

const defaultState: IDefaultState = {
  fastest: true,
  cheapest: false,
  optimal: false,
};

const sortTicketReducer = (
  state: IDefaultState = defaultState,
  action: SortTicketDispatchTypes
): IDefaultState => {
  switch (action.type) {
    case CHANGE_TAB:
      switch (action.payload) {
        case TabAliases.fastest:
          return {
            ...state,
            [TabAliases.fastest]: true,
            [TabAliases.cheapest]: false,
            [TabAliases.optimal]: false,
          };
        case TabAliases.cheapest:
          return {
            ...state,
            [TabAliases.fastest]: false,
            [TabAliases.cheapest]: true,
            [TabAliases.optimal]: false,
          };
        case TabAliases.optimal:
          return {
            ...state,
            [TabAliases.fastest]: false,
            [TabAliases.cheapest]: false,
            [TabAliases.optimal]: true,
          };
        default:
          return state;
      }

    default:
      return state;
  }
};

export default sortTicketReducer;
