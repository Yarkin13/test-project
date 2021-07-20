import { CHANGE_CHECKBOX, INCREASE_TICKETS_LIMIT } from "../redux/types";
import { CheckboxAliases } from "./TicketTypes";
export interface IncreaseTicketsLimit {
  type: typeof INCREASE_TICKETS_LIMIT;
}

export interface ChangeCheckbox {
  type: typeof CHANGE_CHECKBOX;
  payload: CheckboxAliases;
}

export type FilterTicketDispatchTypes = IncreaseTicketsLimit | ChangeCheckbox;
