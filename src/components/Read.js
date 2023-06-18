import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apidata, setApidata] = useState([]);
  function getData() {
    axios
      .get("https://648e720a75a96b6644440300.mockapi.io/crud-storage")
      .then((response) => {
        // console.log(response.data);
        setApidata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
    // console.log(d);
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://648e720a75a96b6644440300.mockapi.io/crud-storage/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const setDataStorage = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-2 mt-2">
            <Link to="/create">
              <button className="btn btn-primary">Create New Data</button>
            </Link>
          </div>
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {apidata.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.e_name}</td>
                    <td>{data.e_age}</td>
                    <td>{data.e_email}</td>
                    <td>
                      <Link to="/edit">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            setDataStorage(
                              data.id,
                              data.e_name,
                              data.e_age,
                              data.e_email
                            );
                          }}
                        >
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          if (window.confirm("Are you sure to DELETE?")) {
                            handleDelete(data.id);
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Read;
