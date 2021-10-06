import React, { Fragment, useEffect, useState } from "react";
import EditEqpScopes from "./EditEqpScope";
import { FaTrashAlt} from "react-icons/fa";

const ListEqpScopes = () => {
  const [eqpScopes, setEqpScopes] = useState([]);

  
    //delete eqpScope function
  const deleteScope = async id => {
    try {
      const deleteScope = await fetch(`http://localhost:5000/eqpScopes/${id}`, {
        method: "DELETE"
      });

      setEqpScopes(eqpScopes.filter(eqpScope => eqpScope.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  //get list Scopes
  const getScopes = async () => {
    try {
      const response = await fetch("http://localhost:5000/eqpScopes");
      const jsonData = await response.json();

      setEqpScopes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getScopes();
  }, []);

  console.log(eqpScopes);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Scope</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {eqpScopes.map(eqpScope => (
            <tr key={eqpScope.id}>
              <td>{eqpScope.scope}</td>
              <td>
                <EditEqpScopes eqpScope={eqpScope} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteScope(eqpScope.id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListEqpScopes;