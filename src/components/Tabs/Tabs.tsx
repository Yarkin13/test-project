import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../../redux/actions/SortTicketActions";
import { RootStore } from "../../Store";
import { ISortTicket, TabAliases } from "../../types/TicketTypes";

import "./Tabs.scss";

const tabsData = [
  { id: 0, text: "САМЫЙ ДЕШЕВЫЙ", alias: TabAliases.cheapest },
  { id: 1, text: "САМЫЙ БЫСТРЫЙ", alias: TabAliases.fastest },
  { id: 2, text: "ОТИМАЛЬНЫЙ", alias: TabAliases.optimal },
];

const Tabs: React.FC = () => {
  const ticketsSort = useSelector(
    (state: RootStore): ISortTicket => state.sortTickets
  );

  const dispatch = useDispatch();

  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabsData.map((item) => {
          const isExist = ticketsSort[item.alias];
          if (isExist) {
            return (
              <li
                className="tabs__item tabs__item--active"
                key={item.id}
                onClick={() => {
                  dispatch(changeTab(item.alias));
                }}
              >
                <p className="tabs__title">{item.text}</p>
              </li>
            );
          } else {
            return (
              <li
                className="tabs__item"
                key={item.id}
                onClick={() => {
                  dispatch(changeTab(item.alias));
                }}
              >
                <p className="tabs__title">{item.text}</p>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Tabs;
