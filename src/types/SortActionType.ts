import { CHANGE_TAB } from "../redux/types";
import { TabAliases } from "./TicketTypes";

export interface ChangeTab {
  type: typeof CHANGE_TAB;
  payload: TabAliases;
}

export type SortTicketDispatchTypes = ChangeTab;
