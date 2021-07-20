import { CheckboxAliases, IFilterTicket } from "../../types/TicketTypes";
import { FilterTicketDispatchTypes } from "../../types/FilterActionType";
import { CHANGE_CHECKBOX, INCREASE_TICKETS_LIMIT } from "../types";
interface IDefaultState extends IFilterTicket {}

const defaultState: IDefaultState = {
  limit: 5,
  allTicket: true,
  withoutStops: false,
  oneStops: false,
  twoStops: false,
  threeStops: false,
};

const filterTicketReducer = (
  state: IDefaultState = defaultState,
  action: FilterTicketDispatchTypes
): IDefaultState => {
  switch (action.type) {
    case INCREASE_TICKETS_LIMIT:
      return {
        ...state,
        limit: state.limit + 5,
      };

    case CHANGE_CHECKBOX: {
      switch (action.payload) {
        case CheckboxAliases.allTicket:
          return {
            ...state,
            [action.payload]: !state[action.payload],
            [CheckboxAliases.oneStops]: false,
            [CheckboxAliases.withoutStops]: false,
            [CheckboxAliases.twoStops]: false,
            [CheckboxAliases.threeStops]: false,
          };
        case CheckboxAliases.withoutStops:
          return {
            ...state,
            [action.payload]: !state[action.payload],
            [CheckboxAliases.allTicket]: false,
          };
        case CheckboxAliases.oneStops:
          return {
            ...state,
            [action.payload]: !state[action.payload],
            [CheckboxAliases.allTicket]: false,
          };
        case CheckboxAliases.twoStops:
          return {
            ...state,
            [action.payload]: !state[action.payload],
            [CheckboxAliases.allTicket]: false,
          };
        case CheckboxAliases.threeStops:
          return {
            ...state,
            [action.payload]: !state[action.payload],
            [CheckboxAliases.allTicket]: false,
          };
        default:
          return state;
      }
    }

    default:
      return state;
  }
};

export default filterTicketReducer;
