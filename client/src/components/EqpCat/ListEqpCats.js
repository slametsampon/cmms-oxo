import React, { Fragment, useEffect, useState } from "react";
import EditEqpCat from "./EditEqpCat";
import { FaTrashAlt} from "react-icons/fa";

const ListEqpCats = () => {
  const [eqpCats, setEqpCats] = useState([]);

  
    //delete eqpCat function
  const deleteEqpCat = async id => {
    try {
      const deleteEqpCat = await fetch(`http://localhost:5000/eqpCats/${id}`, {
        method: "DELETE"
      });

      setEqpCats(eqpCats.filter(eqpCat => eqpCat.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  //get list EqpCats
  const getEqpCats = async () => {
    try {
      const response = await fetch("http://localhost:5000/eqpCats");
      const jsonData = await response.json();

      setEqpCats(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEqpCats();
  }, []);

  console.log(eqpCats);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Category</th>
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
          {eqpCats.map(eqpCat => (
            <tr key={eqpCat.id}>
              <td>{eqpCat.category}</td>
              <td>
                <EditEqpCat eqpCat={eqpCat} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEqpCat(eqpCat.id)}
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

export default ListEqpCats;