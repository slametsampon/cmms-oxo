import React, { Fragment, useState } from "react";

const ReadWorkSheet = ({sheetName}) => {
    const readShName = (val) => {
        alert(val);
    };
    
  return (
    <Fragment>
        <button
            class="dropdown-item"
            type="button"
            onClick={() => readShName(sheetName.name)}
            >{sheetName.name}
        </button>
    </Fragment>
  );
};

export default ReadWorkSheet;