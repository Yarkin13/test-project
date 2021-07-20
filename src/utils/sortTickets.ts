import { IRenderersTicket, ISortTicket } from "./../types/TicketTypes";
export const sortTickets = (
  tickets: IRenderersTicket[],
  sortTickets: ISortTicket
): IRenderersTicket[] => {
  if (sortTickets.cheapest) {
    tickets.sort((a, b): number => a.price - b.price);
  }

  if (sortTickets.fastest) {
    tickets.sort((a, b): number => {
      const hoursOriginNotFormatPrev = a.segments[0].inPath.split(" ")[0];
      const minutesOriginNotFormatPrev = a.segments[0].inPath.split(" ")[1];
      const hoursDestinationNotFormatPrev = a.segments[1].inPath.split(" ")[0];
      const minutesDestinationNotFormatPrev =
        a.segments[1].inPath.split(" ")[1];

      const hoursOriginNotFormatNext = b.segments[0].inPath.split(" ")[0];
      const minutesOriginNotFormatNext = b.segments[0].inPath.split(" ")[1];
      const hoursDestinationNotFormatNext = b.segments[1].inPath.split(" ")[0];
      const minutesDestinationNotFormatNext =
        b.segments[1].inPath.split(" ")[1];

      const hoursOriginPrev = Number(
        hoursOriginNotFormatPrev.substring(
          0,
          hoursOriginNotFormatPrev.length - 1
        )
      );
      const minutesOriginPrev = Number(
        minutesOriginNotFormatPrev.substring(
          0,
          minutesOriginNotFormatPrev.length - 1
        )
      );
      const hoursDestinationPrev = Number(
        hoursDestinationNotFormatPrev.substring(
          0,
          hoursDestinationNotFormatPrev.length - 1
        )
      );
      const minutesDestinationPrev = Number(
        minutesDestinationNotFormatPrev.substring(
          0,
          minutesDestinationNotFormatPrev.length - 1
        )
      );

      const hoursOriginNext = Number(
        hoursOriginNotFormatNext.substring(
          0,
          hoursOriginNotFormatNext.length - 1
        )
      );
      const minutesOriginNext = Number(
        minutesOriginNotFormatNext.substring(
          0,
          minutesOriginNotFormatNext.length - 1
        )
      );
      const hoursDestinationNext = Number(
        hoursDestinationNotFormatNext.substring(
          0,
          hoursDestinationNotFormatNext.length - 1
        )
      );
      const minutesDestinationNext = Number(
        minutesDestinationNotFormatNext.substring(
          0,
          minutesDestinationNotFormatNext.length - 1
        )
      );

      const totalMinutesPrev =
        hoursOriginPrev * 60 +
        minutesOriginPrev +
        hoursDestinationPrev * 60 +
        minutesDestinationPrev;

      const totalMinutesNext =
        hoursOriginNext * 60 +
        minutesOriginNext +
        hoursDestinationNext * 60 +
        minutesDestinationNext;

      return totalMinutesPrev - totalMinutesNext;
    });
  }
  return tickets;
};
