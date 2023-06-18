import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  let navigate = useNavigate();
  const [id, setId] = useState(0);
  const [name, setName] = useState(" ");
  const [age, setAge] = useState(" ");
  const [email, setEmail] = useState(" ");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://648e720a75a96b6644440300.mockapi.io/crud-storage/${id}`, {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className="bg-primary p-4 text-center">
              <h1>Update Data</h1>
            </div>
            <div className="mb-2 mt-2">
              <Link to="/">
                <button className="btn btn-primary">Read Data</button>
              </Link>
            </div>
            <form onSubmit={handleUpdate}>
              <div className="form-group">
                <label>Enter Name: </label>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Age: </label>
                <input
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Email: </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="form-control"
                />
              </div>
              <br />
              <div className="d-grid">
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-primary"
                />
              </div>
            </form>
            {/* {name}
        <br />
        {age}
        <br />
        {email}
        <br /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
