import React, { Fragment } from "react";
import "./App.css";

//components
import TopNavigation from "./components/layout/TopNavigation";
import ConfigNav from "./components/layout/ConfigNav";

//Equipment
import Equipment from "./components/Equipment/Equipment";

function App() {
  return (
    <Fragment>
      <div className="container">
        <TopNavigation />
        <ConfigNav />
        <Equipment />
      </div>
    </Fragment>
  );
}

export default App;
