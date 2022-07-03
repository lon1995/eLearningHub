import React from "react";
import { Link, Outlet } from "react-router-dom";
import LOGO from "./../Images/logo.png";
import useAuth from "./../Hooks/useAuth";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import {
  BsPersonLinesFill,
  BsFillPersonXFill,
  BsFillInfoCircleFill,
  BsPersonPlusFill,
  BsPlusCircleFill,
  BsFillFileEarmarkTextFill,
  BsFillFileEarmarkPlusFill,
} from "react-icons/bs";
import Translate from "../Components/Translate";

const AdminDashboard = () => {
  const { logout, trans } = useAuth();
  return (
    <div>
      <div className="row g-0">
        <div className="col-md-3 shadow">
          <aside className="bg-white">
            <div className="dProfile">
              <div className="p-5">
                <Link to="/">
                  <img className="w-75" src={LOGO} alt="Logo" />
                </Link>
              </div>
            </div>
            <nav>
              <div className="py-5 px-4">
                <Link
                  className="align-items-center d-flex NavText py-2 my-1"
                  to="/adminDashboard/"
                >
                  <BsFillGrid1X2Fill />
                  <span className="NavText">
                    {" "}
                    <Translate text="Dashboard" type={trans} />
                  </span>
                </Link>
                <Link
                  className="align-items-center d-flex NavText py-2 my-1"
                  to="/dashboard/"
                >
                  <BsFillGrid1X2Fill />
                  <span className="NavText">
                    {" "}
                    <Translate text="Instructor Dashboard" type={trans} />
                  </span>
                </Link>
                <Link
                  className="align-items-center d-flex NavText py-2 my-1"
                  to="/adminDashboard/addCourse"
                >
                  <BsPlusCircleFill />
                  <span className="NavText">
                    {" "}
                    <Translate text="Add Course" type={trans} />
                  </span>
                </Link>
                <Link
                  className="align-items-center d-flex NavText py-2 my-1"
                  to="/adminDashboard/addQuiz"
                >
                  <BsFillFileEarmarkPlusFill />
                  <span className="NavText">
                    {" "}
                    <Translate text="Add Form" type={trans} />
                  </span>
                </Link>
                <Link
                  className="align-items-center d-flex NavText py-2 my-1"
                  to="/adminDashboard/allQuiz"
                >
                  <BsFillFileEarmarkTextFill />
                  <span className="NavText">
                    {" "}
                    <Translate text="All Forms" type={trans} />
                  </span>
                </Link>
                <Link
                  className="align-items-center d-flex NavText py-2 my-1"
                  to="/adminDashboard/addCategory"
                >
                  <BsPlusCircleFill />
                  <span className="NavText">
                    {" "}
                    <Translate text="Add Category" type={trans} />
                  </span>
                </Link>
                <Link
                  className="align-items-center d-flex NavText py-2 my-1"
                  to="/adminDashboard/addStudent"
                >
                  <BsPersonPlusFill />
                  <span className="NavText">
                    {" "}
                    <Translate text="Add Student" type={trans} />
                  </span>
                </Link>
                <Link
                  className="align-items-center d-flex NavText py-2 my-1"
                  to="/adminDashboard/addInstructor"
                >
                  <BsPersonPlusFill />
                  <span className="NavText">
                    {" "}
                    <Translate text="Add Instructor" type={trans} />
                  </span>
                </Link>
                <Link
                  className="align-items-center d-flex NavText py-2 my-1"
                  to="/adminDashboard/addAdmin"
                >
                  <BsPersonPlusFill />
                  <span className="NavText">
                    {" "}
                    <Translate text="Make Admin" type={trans} />
                  </span>
                </Link>
                <Link
                  className="align-items-center d-flex NavText py-2 my-1"
                  to="/adminDashboard/totalCourse"
                >
                  <BsPersonLinesFill />
                  <span className="NavText">
                    {" "}
                    <Translate text="Total Course" type={trans} />
                  </span>
                </Link>
                <Link
                  className="align-items-center d-flex NavText py-2 my-1"
                  to="/adminDashboard/totalStudent"
                >
                  <BsPersonLinesFill />
                  <span className="NavText">
                    {" "}
                    <Translate text="Total Student" type={trans} />
                  </span>
                </Link>
                <Link
                  className="align-items-center d-flex NavText py-2 my-1"
                  to="/adminDashboard/totalInstructor"
                >
                  <BsPersonLinesFill />
                  <span className="NavText">
                    {" "}
                    <Translate text="Total Instructor" type={trans} />
                  </span>
                </Link>
                <Link
                  className="align-items-center d-flex NavText py-2 my-1"
                  to="/adminDashboard/account"
                >
                  <BsFillInfoCircleFill />
                  <span className="NavText">
                    {" "}
                    <Translate text="Setting" type={trans} />
                  </span>
                </Link>
                <Link
                  className="align-items-center d-flex NavText py-2 my-1"
                  to="/"
                  onClick={logout}
                >
                  <BsFillPersonXFill />
                  <span className="NavText">
                    {" "}
                    <Translate text="Log Out" type={trans} />
                  </span>
                </Link>
              </div>
            </nav>
          </aside>
        </div>
        <div className="col-md-9 dashboardBg">
          <div className="py-5 px-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
