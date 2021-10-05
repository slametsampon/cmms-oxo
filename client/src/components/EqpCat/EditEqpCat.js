import React, { Fragment, useState } from "react";
import { FaPenFancy, FaWindowClose} from "react-icons/fa";

const EditEqpCat = ({ eqpCat }) => {
  const [category, setCategory] = useState(eqpCat.category);

  //edit category function
  const updateCategory = async e => {
    e.preventDefault();
    try {
      const body = { category };
      const response = await fetch(
        `http://localhost:5000/eqpCat/${eqpCat.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${eqpCat.id}`}
      >
        <FaPenFancy />
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${eqpCat.id}`}
        onClick={() => setCategory(eqpCat.category)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit EqpCat</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setCategory(eqpCat.category)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={category}
                onChange={e => setCategory(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateCategory(e)}
              >
                <FaPenFancy />
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setCategory(eqpCat.category)}
              >
                <FaWindowClose />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditEqpCat;