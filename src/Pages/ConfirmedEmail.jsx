import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthBanner from "../Components/Frontend/AuthBanner";
import Footer from "../Components/Frontend/Footer";
import NavBar from "../Components/Frontend/NavBar";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import Translate from "../Components/Translate";
const ConfirmedEmail = () => {
  const { AuthEmailLogin, error, trans } = useAuth();
  const [passwordData, setPasswordData] = useState("");
  const getPassword = (e) => {
    setPasswordData(e.target.value);
  };
  const sendPassword = () => {
    AuthEmailLogin(passwordData);
  };
  return (
    <>
      <NavBar />
      <div className="my-5">
        <div className="container">
          <div className="row py-3 align-items-center">
            <div className="col-md-6">
              <div className="loginFrom">
                <h1 className="fw-bolder">
                  {" "}
                  <Translate text="Confirm Your Email" type={trans} />
                </h1>
                <p className="text-danger">{error}</p>
                <div className="my-5 w-75">
                  <div className="my-5 input-group-lg">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label d-flex justify-content-between align-items-center"
                    >
                      <span>
                        {" "}
                        <Translate text="Email" type={trans} />
                      </span>
                    </label>
                    <input
                      onBlur={getPassword}
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Type Here"
                    />
                  </div>
                  <div className="py-3">
                    <Link
                      onClick={sendPassword}
                      to="/password"
                      className="primaryBgColor d-block px-4 py-3 text-white fw-bolder rounded text-uppercase text-center text-uppercase"
                    >
                      <Translate text="Login" type={trans} />
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
    </>
  );
};

export default ConfirmedEmail;
