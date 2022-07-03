import React from "react";
import { Link } from "react-router-dom";
import AuthBanner from "../Components/Frontend/AuthBanner";
import Footer from "../Components/Frontend/Footer";
import NavBar from "../Components/Frontend/NavBar";

const InstructorRegister = () => {
  return (
    <div>
      <NavBar />
      <div className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="loginFrom">
                <h1 className="fw-bolder">Instructor Register</h1>
                <p>
                  If You have Account? <Link to="/login">Log In</Link>
                </p>
                <div className="my-4 w-75">
                  <div className="my-2 text-black input-group-lg">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Type Here"
                    />
                  </div>
                  {/* <div className="my-2 text-black input-group-lg">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Department
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Type Here"
                    />
                  </div> */}
                  <div className="my-2 text-black input-group-lg">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Type Here"
                    />
                  </div>

                  <div className="my-2 text-black input-group-lg">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label d-flex justify-content-between align-items-center"
                    >
                      <span>Password </span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Type Here"
                    />
                  </div>
                  <div className="my-2 text-black input-group-lg">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label d-flex justify-content-between align-items-center"
                    >
                      <span>Confirm Password </span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Type Here"
                    />
                  </div>
                  <div className="py-3">
                    <Link
                      to="/dashboard"
                      className="primaryBgColor d-block px-4 py-3 text-white fw-bolder rounded text-uppercase text-center text-uppercase"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <AuthBanner />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InstructorRegister;
