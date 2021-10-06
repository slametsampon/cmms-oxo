import React, { Fragment } from "react";
import "./App.css";

//components
import CmmsNavigation from "./components/layout/CmmsNavigation";

function App() {
  return (
    <Fragment>
      <div className="container">
        <CmmsNavigation />
        <h4>It's CMMS Home</h4>
      </div>
    </Fragment>
  );
}

export default App;
