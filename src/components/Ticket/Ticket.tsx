import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../Store";
import { IFilterTicket, ISortTicket, ITicket } from "../../types/TicketTypes";
import "./Ticket.scss";
import { mappingTickets } from "../../utils/mappingTickets";
import PulseLoader from "react-spinners/PulseLoader";
import { sortTickets } from "../../utils/sortTickets";
import Button from "../Button/Button";

const Ticket: React.FC = () => {
  const tickets = useSelector(
    (state: RootStore): ITicket[] => state.tickets.tickets
  );

  const ticketsFilter = useSelector(
    (state: RootStore): IFilterTicket => state.filterTickets
  );

  const ticketsSort = useSelector(
    (state: RootStore): ISortTicket => state.sortTickets
  );

  if (!tickets) {
    return <div className="loader">Ошибка сервера</div>;
  }

  const filteredTickets = mappingTickets(tickets, ticketsFilter);

  const filteredAndSortedTickets = sortTickets(filteredTickets, ticketsSort);

  if (filteredTickets.length === 0) {
    return <div className="loader">Нет билетов для показа</div>;
  }

  return (
    <>
      {filteredAndSortedTickets[0].price ? (
        <div>
          {filteredAndSortedTickets.map((ticket, index) => {
            const logoUrl = `//pics.avs.io/99/36/${ticket.carrier}.png`;
            return (
              <div className="ticket__container" key={index}>
                <div className="ticket__title-container">
                  <p className="ticket__price">{ticket.price} Р</p>
                  <div className="ticket__logo">
                    <img src={logoUrl} alt={"s7logo"}></img>
                  </div>
                </div>
                <div className="ticket__body">
                  {ticket.segments.map((segment, index) => {
                    return (
                      <div className="ticket__row" key={index}>
                        <div className="ticket__description">
                          <p className="ticket__subtitle">{segment.path}</p>
                          <p className="ticket__text">{segment.time}</p>
                        </div>
                        <div className="ticket__description">
                          <p className="ticket__subtitle">В ПУТИ</p>
                          <p className="ticket__text">{segment.inPath}</p>
                        </div>
                        <div className="ticket__description">
                          <p className="ticket__subtitle">{segment.stops}</p>
                          <p className="ticket__text">{segment.stopsPoints}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <Button />
        </div>
      ) : (
        <div className="loader">
          <PulseLoader loading={true} color={"#2196f3"} />
        </div>
      )}
    </>
  );
};

export default Ticket;
