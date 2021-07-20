import {
  IFilterTicket,
  IRenderersTicket,
  IRenderersSegmentTicket,
  ITicket,
} from "./../types/TicketTypes";
export const mappingTickets = (
  tickets: ITicket[],
  filterTickets: IFilterTicket
): IRenderersTicket[] => {
  let slicedTickets: ITicket[] = tickets.slice(0, filterTickets.limit);

  slicedTickets = slicedTickets.filter((ticket: ITicket) => {
    if (
      filterTickets.oneStops &&
      (ticket.segments[0].stops.length === 1 ||
        ticket.segments[1].stops.length === 1)
    ) {
      return true;
    }
    if (
      filterTickets.twoStops &&
      (ticket.segments[0].stops.length === 2 ||
        ticket.segments[1].stops.length === 2)
    ) {
      return true;
    }
    if (
      filterTickets.threeStops &&
      (ticket.segments[0].stops.length === 3 ||
        ticket.segments[1].stops.length === 3)
    ) {
      return true;
    }
    if (
      filterTickets.withoutStops &&
      (ticket.segments[0].stops.length === 0 ||
        ticket.segments[1].stops.length === 0)
    ) {
      return true;
    }
    if (filterTickets.allTicket) {
      return true;
    }
  });

  const renderersTickets: IRenderersTicket[] = slicedTickets.map(
    (ticket: ITicket) => {
      const newTicket: IRenderersTicket = <IRenderersTicket>{};
      newTicket.carrier = ticket.carrier;
      newTicket.price = ticket.price;
      newTicket.segments = ticket.segments.map((segment) => {
        const newSegemnt: IRenderersSegmentTicket = <IRenderersSegmentTicket>{};
        newSegemnt.path = `${segment.origin}-${segment.destination}`;
        const duration = getDurationInHM(segment.duration);
        newSegemnt.inPath = `${duration.hours}ч ${duration.minutes}м`;
        const timeInterval = getTimeInterval(segment.date, duration);
        newSegemnt.time = `${timeInterval.origin.hours}:${timeInterval.origin.minutes} - ${timeInterval.destination.hours}:${timeInterval.destination.minutes}`;
        const stopsLength = segment.stops.length;

        switch (stopsLength) {
          case 0:
            newSegemnt.stops = `БЕЗ ПЕРЕСАДОК`;
            break;
          case 1:
            newSegemnt.stops = `${stopsLength} ПЕРЕСАДКА`;
            break;
          case 2:
            newSegemnt.stops = `${stopsLength} ПЕРЕСАДКИ`;
            break;
          case 3:
            newSegemnt.stops = `${stopsLength} ПЕРЕСАДКИ`;
            break;
          default:
        }

        if (stopsLength) {
          newSegemnt.stopsPoints = segment.stops.reduce((acc, currentValue) => {
            return acc + " ," + currentValue;
          });
        } else {
          newSegemnt.stopsPoints = "";
        }

        return newSegemnt;
      });
      return newTicket;
    }
  );

  return renderersTickets;
};

const getDurationInHM = (
  minutes: number
): { hours: number; minutes: number } => {
  const hours = Math.floor(minutes / 60);
  const _minutes = minutes % 60;
  return { hours, minutes: _minutes };
};

const getTimeInterval = (
  date: string,
  duration: { hours: number; minutes: number }
): {
  origin: {
    hours: string;
    minutes: string;
  };
  destination: {
    hours: string;
    minutes: string;
  };
} => {
  const timestampOrigin = Date.parse(date);
  const dataOrigin = new Date(timestampOrigin);
  const timestampDestination =
    timestampOrigin +
    duration.hours * 60 * 60 * 1000 +
    duration.minutes * 60 * 1000;
  const dataDestination = new Date(timestampDestination);

  return {
    origin: {
      hours: String(dataOrigin.getHours()),
      minutes:
        dataOrigin.getMinutes() > 9
          ? String(dataOrigin.getMinutes())
          : "0" + String(dataOrigin.getMinutes()),
    },
    destination: {
      hours: String(dataDestination.getHours()),
      minutes:
        dataDestination.getMinutes() > 9
          ? String(dataDestination.getMinutes())
          : "0" + String(dataDestination.getMinutes()),
    },
  };
};
