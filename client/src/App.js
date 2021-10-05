import React, { Fragment } from "react";
import "./App.css";

//components

import ListEqpCats from "./components/EqpCat/ListEqpCats";
import InputEqpCat from "./components/EqpCat/InputEqpCat";
import TopNavigation from "./components/layout/TopNavigation";
import ConfigNav from "./components/layout/ConfigNav";

function App() {
  return (
    <Fragment>
      <div className="container">
        <TopNavigation />
        <ConfigNav />
        <InputEqpCat />
        <ListEqpCats />
      </div>
    </Fragment>
  );
}

export default App;
