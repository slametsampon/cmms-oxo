import React, { Fragment, useState } from "react";
import { FaPenFancy, FaWindowClose} from "react-icons/fa";

const EditEqpScope = ({ eqpScope }) => {
  const [scope, setScope] = useState(eqpScope.scope);

  //edit scope function
  const updateScope = async e => {
    e.preventDefault();
    try {
      const body = { eqpScope };
      const response = await fetch(
        `http://localhost:5000/eqpScopes/${eqpScope.id}`,
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
        data-target={`#id${eqpScope.id}`}
      >
        <FaPenFancy />
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${eqpScope.id}`}
        onClick={() => setScope(eqpScope.scope)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit EqpScope</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setScope(eqpScope.scope)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={scope}
                onChange={e => setScope(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateScope(e)}
              >
                <FaPenFancy />
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setScope(eqpScope.scope)}
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

export default EditEqpScope;