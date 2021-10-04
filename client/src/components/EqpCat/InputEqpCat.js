import React, { Fragment, useState } from "react";

const InputEqpCat = () => {
  const [category, setCategory] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { category };
      const response = await fetch("http://localhost:5000/eqpCats", {
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
      <h1 className="text-center mt-5">Equipment Category List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputEqpCat;
