import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import LOGO from "./../../Images/logo.png";
import useAuth from "./../../Hooks/useAuth.jsx";
import { useCart } from "react-use-cart";
import Translate from "./../Translate";
const NavBar = () => {
  const { user, admin, handleTransLate, trans } = useAuth();
  const { totalItems } = useCart();
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={LOGO} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-1">
              <li className="nav-item">
                <Link
                  className="NavText nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/courseList" className="NavText nav-link">
                  <Translate text={"Course"} type={trans} />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/instructor" className="NavText nav-link" href="#">
                  <Translate text={"Instructor"} type={trans} />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="NavText nav-link">
                  <Translate text={"FAQ"} type={trans} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="NavText nav-link" to="/about">
                  <Translate text={"About"} type={trans} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="NavText nav-link" to="/contact">
                  <Translate text={"Contact"} type={trans} />
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Language
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => handleTransLate("en")}
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => handleTransLate("ro")}
                    >
                      Romanian
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/cart">
                  <span className="position-relative mx-2">
                    <span className="fs-4">
                      <BsCartPlus />
                    </span>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill primaryBgColor">
                      {totalItems}
                      <span className="visually-hidden">
                        <Translate text={"Cart Items"} type={trans} />
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
              <li className="nav-item mx-1">
                {!user.email ? (
                  <Link
                    className="NavText nav-link"
                    aria-current="page"
                    to="/login"
                  >
                    <button type="button" className="btn btn-dark">
                      <Translate text={"LOGIN"} type={trans} />
                    </button>
                  </Link>
                ) : (
                  <>
                    {admin ? (
                      <Link to="/adminDashboard">
                        <img
                          width="45px"
                          height="45px"
                          className="profilePic"
                          src={
                            user.photoURL
                              ? user.photoURL
                              : "https://idronline.org/wp-content/uploads/2021/01/Screen-Shot-2019-02-19-at-1.23.40-PM-300x300-3.jpg"
                          }
                          alt="Profile"
                        />
                      </Link>
                    ) : (
                      <Link to="/dashboard">
                        <img
                          width="45px"
                          height="45px"
                          className="profilePic"
                          src={
                            user.photoURL
                              ? user.photoURL
                              : "https://idronline.org/wp-content/uploads/2021/01/Screen-Shot-2019-02-19-at-1.23.40-PM-300x300-3.jpg"
                          }
                          alt="Profile"
                        />
                      </Link>
                    )}
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
