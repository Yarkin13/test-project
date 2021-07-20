export interface ITicket {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета туда
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    },
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета обратно
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    }
  ];
}

export interface IFilterTicket {
  limit: number;
  allTicket: boolean;
  withoutStops: boolean;
  oneStops: boolean;
  twoStops: boolean;
  threeStops: boolean;
}

export interface ISortTicket {
  fastest: boolean;
  cheapest: boolean;
  optimal: boolean;
}

export interface IRenderersTicket {
  price: number;
  carrier: string;
  segments: IRenderersSegmentTicket[];
}

export interface IRenderersSegmentTicket {
  path: string;
  time: string;
  inPath: string;
  stops: string;
  stopsPoints: string;
}

export enum CheckboxAliases {
  allTicket = "allTicket",
  withoutStops = "withoutStops",
  oneStops = "oneStops",
  twoStops = "twoStops",
  threeStops = "threeStops",
}

export enum TabAliases {
  fastest = "fastest",
  cheapest = "cheapest",
  optimal = "optimal",
}
