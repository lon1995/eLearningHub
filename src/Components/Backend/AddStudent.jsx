import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Translate from "./../Translate";

const AddStudent = () => {
  const { AuthEmailSend, error, trans } = useAuth();
  const [loginData, setLoginData] = useState({});
  const [category, setCategory] = useState([]);
  const [courseCategory, setCourseCategory] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://cryptic-temple-44121.herokuapp.com/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const handleLog = (e) => {
    setLoginData(e.target.value);
  };

  const loginSubmit = () => {
    AuthEmailSend(loginData);
    fetch("https://cryptic-temple-44121.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: loginData,
        isStudent: true,
        name: "",
        about: "",
        phone: "",
        national: "",
        profession: "",
        category: courseCategory,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setLoginData("");
          Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Student Added Successfully",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

  return (
    <div className="bg-white rounded">
      <div className="row align-items-center py-4 px-5">
        <div className="col-md-2">
          <label
            htmlFor="addStudent"
            className="form-label d-flex justify-content-between align-items-center"
          >
            <span className="fs-5">
              <Translate text={"Student"} type={trans} />
            </span>
          </label>
          <p className="text-danger">{error}</p>
        </div>
        <div className="col-md-4">
          <div className="my-4">
            <input
              onBlur={handleLog}
              name="email"
              type="email"
              className="form-control"
              id="addStudent"
              aria-describedby="emailHelp"
              placeholder="example@mail.com"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="my-4">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(event) => setCourseCategory(event.target.value)}
            >
              <option selected>
                <Translate text={"Select Category"} type={trans} />
              </option>
              {category.map((i, index) => (
                <option key={index} value={i.category}>
                  <Translate text={i.category} type={trans} />
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <button
            onClick={loginSubmit}
            type="button"
            className="btn btn-dark d-inline-block"
          >
            <Translate text={"Add Student"} type={trans} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
