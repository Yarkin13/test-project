import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCheckbox } from "../../redux/actions/FilterTicketActions";
import { RootStore } from "../../Store";
import { CheckboxAliases, IFilterTicket } from "../../types/TicketTypes";
import "./Checkboxes.scss";

const checkboxData: { text: string; id: number; alias: CheckboxAliases }[] = [
  {
    text: "Все",
    id: 0,
    alias: CheckboxAliases.allTicket,
  },
  {
    text: "Без пересадок",
    id: 1,
    alias: CheckboxAliases.withoutStops,
  },
  {
    text: "1 пересадка",
    id: 2,
    alias: CheckboxAliases.oneStops,
  },
  {
    text: "2 пересадки",
    id: 3,
    alias: CheckboxAliases.twoStops,
  },
  {
    text: "3 пересадки",
    id: 4,
    alias: CheckboxAliases.threeStops,
  },
];

const Checkboxes: React.FC = () => {
  const ticketsFilter = useSelector(
    (state: RootStore): IFilterTicket => state.filterTickets
  );

  const dispatch = useDispatch();

  return (
    <div className="checkboxes-container">
      <p className="checkboxes-container__title">КОЛЛИЧЕСТВО ПЕРЕСАДОК</p>
      <ul className="checkboxes-container__list">
        {checkboxData.map((item) => {
          const isChecked = ticketsFilter[item.alias];
          return (
            <li className="checkboxes-container__item" key={item.id}>
              <label className="checkbox">
                <input
                  type="checkbox"
                  className="checkbox__input"
                  checked={isChecked}
                  onChange={() => {
                    dispatch(changeCheckbox(item.alias));
                  }}
                  id={item.alias}
                ></input>
                <span className="checkbox__box"></span>
                {item.text}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Checkboxes;
