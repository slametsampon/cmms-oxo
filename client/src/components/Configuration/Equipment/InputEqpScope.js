import React, { Fragment, useState } from "react";

const InputScope = () => {
  const [scope, setScope] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { scope };
      const response = await fetch("http://localhost:5000/eqpScopes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Equipment Scope</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={scope}
          onChange={e => setScope(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputScope;
