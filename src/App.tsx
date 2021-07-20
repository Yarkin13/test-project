import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
