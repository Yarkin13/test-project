import { SortTicketDispatchTypes } from "../../types/SortActionType";
import { CHANGE_TAB } from "../types";
import { TabAliases } from "../../types/TicketTypes";

export const changeTab = (
  payload: TabAliases
): SortTicketDispatchTypes => {
  return {
    type: CHANGE_TAB,
    payload,
  };
};
