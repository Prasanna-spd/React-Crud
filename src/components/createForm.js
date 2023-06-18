import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateForm() {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://648e720a75a96b6644440300.mockapi.io/crud-storage", {
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
              <h1>Create Data</h1>
            </div>
            <div className="mb-2 mt-2">
              <Link to="/">
                <button className="btn btn-primary">Read Data</button>
              </Link>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Enter Name: </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Age: </label>
                <input
                  type="number"
                  placeholder="Age"
                  className="form-control"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Email: </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <br />
              <div className="d-grid">
                <input
                  type="submit"
                  value="Submit"
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

export default CreateForm;
