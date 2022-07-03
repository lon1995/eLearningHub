import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Translate from "./../../Translate";
const AddInstructor = () => {
  const { AuthEmailSend, trans } = useAuth();
  const [loginData, setLoginData] = useState({});
  const [category, setCategory] = useState([]);
  const [preLoading, setPreLoading] = useState(false);
  const [instructorFile, setInstructorFile] = useState("");
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

  const loginSubmit = async () => {
    setPreLoading(true);
    AuthEmailSend(loginData);
    const formData = new FormData();
    formData.append("file", instructorFile);
    formData.append("upload_preset", "elearning");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/elearning-hub/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const file = await res.json();
    const InstructorInfoUp = {
      preview: file.url,
      email: loginData,
      isInstructor: true,
      name: "",
      about: "",
      phone: "",
      national: "",
      profession: "",
      category: courseCategory,
    };

    if (file.asset_id) {
      fetch("https://cryptic-temple-44121.herokuapp.com/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(InstructorInfoUp),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setLoginData("");
            Swal.fire({
              position: "center-center",
              icon: "success",
              title: "Instructor Added Successfully",
              showConfirmButton: false,
              timer: 2500,
            });
            navigate("/adminDashboard/totalInstructor");
          }
        });
    }
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
              {" "}
              <Translate text="Instructor" type={trans} />
            </span>
          </label>
        </div>
        <div className="col-md-3">
          <div className="my-4">
            <input
              onBlur={handleLog}
              name="email"
              type="email"
              className="form-control"
              id="addStudent"
              placeholder="Instructor Email"
            />
          </div>
        </div>
        <div className="col-md-2">
          <div className="my-4">
            <input
              onChange={(e) => setInstructorFile(e.target.files[0])}
              name="InstructorFile"
              type="file"
              className="form-control"
              id="addStudent"
              aria-describedby="emailHelp"
              placeholder="example@mail.com"
            />
          </div>
        </div>
        <div className="col-md-2">
          <div className="my-4">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(event) => setCourseCategory(event.target.value)}
            >
              <option selected>
                {" "}
                <Translate text="Select Category" type={trans} />
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
          {preLoading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">
                {" "}
                <Translate text="Loading..." type={trans} />
              </span>
            </div>
          ) : (
            <button
              onClick={loginSubmit}
              type="button"
              className="btn btn-dark d-inline-block"
            >
              <Translate text="Add Instructor" type={trans} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddInstructor;
