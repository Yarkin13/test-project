import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetTickets } from "../../redux/actions/TicketActions";
import Checkboxes from "../Checkboxes/Checkboxes";
import Tabs from "../Tabs/Tabs";
import Ticket from "../Ticket/Ticket";
import "./Main.scss";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTickets());
  }, []);

  return (
    <main className="main">
      <div className="main__checkboxes-container">
        <Checkboxes />
      </div>
      <div className="main__titckets-container">
        <Tabs />
        <Ticket />
      </div>
    </main>
  );
};

export default Main;
