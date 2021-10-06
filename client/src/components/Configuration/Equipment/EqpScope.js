import React, { Fragment } from "react";

//components

import ListEqpScope from "./ListEqpScope";
import InputEqpScope from "./InputEqpScope";

function Equipment() {
  return (
    <Fragment>
        <InputEqpScope />
        <ListEqpScope />
    </Fragment>
  );
}

export default Equipment;
