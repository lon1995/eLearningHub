import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Translate from "./../../Translate";
import useAuth from "./../../../Hooks/useAuth";

const AddAdmin = () => {
  const { trans } = useAuth();
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLog = (e) => {
    setEmail(e.target.value);
  };

  const adminSubmit = () => {
    const user = { email };
    fetch("https://cryptic-temple-44121.herokuapp.com/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setSuccess(true);
          setEmail("");
          Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Admin Added Successfully",
            showConfirmButton: false,
            timer: 2500,
          });
          navigate("/adminDashboard");
        }
      });
  };
  // console.log(email);
  return (
    <>
      <div className="bg-white rounded">
        <div className="row align-items-center py-4 px-5">
          <div className="col-md-2">
            <label
              htmlFor="addStudent"
              className="form-label d-flex justify-content-between align-items-center"
            >
              <span className="fs-5">
                <Translate text="Admin" type={trans} />
              </span>
            </label>
          </div>
          <div className="col-md-7">
            <div className="my-4">
              <input
                defaultValue={email}
                onBlur={handleLog}
                name="email"
                type="text"
                className="form-control"
                id="addStudent"
                placeholder="example@mail.com"
              />
            </div>
          </div>
          <div className="col-md-3">
            <button
              onClick={adminSubmit}
              type="button"
              className="btn btn-dark d-inline-block"
            >
              <Translate text={"Add Admin"} type={trans} />
            </button>
          </div>
        </div>
      </div>
      <div className="my-4">
        {success && (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>Successfully </strong> Admin Added
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
      </div>
    </>
  );
};

export default AddAdmin;
