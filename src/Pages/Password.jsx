import React from "react";
import AuthBanner from "../Components/Frontend/AuthBanner";
import Footer from "../Components/Frontend/Footer";
import NavBar from "../Components/Frontend/NavBar";
import useAuth from "../Hooks/useAuth";
import Translate from "../Components/Translate";
const Password = () => {
  const { setPassword, error, UpdatePass, trans } = useAuth();

  const getPassword = (e) => {
    const pass = e.target.value;
    setPassword(pass);
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
                  <Translate text="Set Your Password" type={trans} />
                </h1>
                <p className="text-danger">{error}</p>
                <div className="my-5 w-75">
                  <div className="my-4 input-group-lg">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label d-flex justify-content-between align-items-center"
                    >
                      <span>
                        <Translate text="Password" type={trans} />
                      </span>
                    </label>
                    <input
                      onBlur={getPassword}
                      type="password"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Type Here"
                    />
                  </div>
                  <div className="py-3">
                    <div
                      onClick={UpdatePass}
                      to="/dashboard"
                      className="primaryBgColor d-block px-4 py-3 text-white fw-bolder rounded text-uppercase text-center text-uppercase"
                    >
                      <Translate text="Set Password" type={trans} />
                    </div>
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

export default Password;
