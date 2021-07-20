import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseTicketsLimit } from "../../redux/actions/FilterTicketActions";
import { RootStore } from "../../Store";
import { IFilterTicket } from "../../types/TicketTypes";
import "./Button.scss";

const Button: React.FC = () => {
  const dispatch = useDispatch();

  const ticketsFilter = useSelector(
    (state: RootStore): IFilterTicket => state.filterTickets
  );

  return (
    <button
      className="button"
      disabled={ticketsFilter.limit > 50 ? true : false}
      onClick={() => dispatch(increaseTicketsLimit())}
    >
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  );
};

export default Button;
