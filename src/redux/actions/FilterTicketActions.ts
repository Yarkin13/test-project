import { FilterTicketDispatchTypes } from "../../types/FilterActionType";
import { CHANGE_CHECKBOX, INCREASE_TICKETS_LIMIT } from "../types";
import { CheckboxAliases } from "../../types/TicketTypes";

export const increaseTicketsLimit = (): FilterTicketDispatchTypes => {
  return {
    type: INCREASE_TICKETS_LIMIT,
  };
};

export const changeCheckbox = (
  payload: CheckboxAliases
): FilterTicketDispatchTypes => {
  return {
    type: CHANGE_CHECKBOX,
    payload,
  };
};
