import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthBanner from "../Components/Frontend/AuthBanner";
import Footer from "../Components/Frontend/Footer";
import NavBar from "../Components/Frontend/NavBar";
import useAuth from "../Hooks/useAuth";
import Translate from "../Components/Translate";
const Login = () => {
  const { loginUser, user, error, trans } = useAuth();
  const [loginData, setLoginData] = useState({});

  const handleLog = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const loginSubmit = () => {
    loginUser(loginData.email, loginData.password);
    console.log(loginData.email, loginData.password);
    console.log(user);
  };

  return (
    <>
      <NavBar />
      <div className="my-5">
        <div className="container">
          <div className="row py-3">
            <div className="col-md-6">
              <div className="loginFrom">
                <h1 className="fw-bolder">
                  <Translate text="Login" type={trans} />
                </h1>
                <p className="text-danger">{error}</p>
                <div className="my-5 w-75">
                  <div className="my-4 input-group-lg">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      <Translate text="Email" type={trans} />
                    </label>
                    <input
                      onChange={handleLog}
                      name="email"
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Type Here"
                    />
                  </div>
                  <div className="my-4 input-group-lg">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label d-flex justify-content-between align-items-center"
                    >
                      <span>
                        <Translate text="Password" type={trans} />
                      </span>
                      <span>
                        <Link to="/forget-password">
                          <Translate text="Forget" type={trans} />
                        </Link>
                      </span>
                    </label>
                    <input
                      onChange={handleLog}
                      name="password"
                      type="password"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Type Here"
                    />
                  </div>
                  <div className="py-3">
                    <Link
                      onClick={loginSubmit}
                      to="/dashboard"
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

export default Login;
