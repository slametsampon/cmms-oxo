import React, { Fragment } from "react";
import "./App.css";

//components

import ListEqpCats from "./components/EqpCat/ListEqpCats";
import InputEqpCat from "./components/EqpCat/InputEqpCat"

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputEqpCat />
        <ListEqpCats />
      </div>
    </Fragment>
  );
}

export default App;
