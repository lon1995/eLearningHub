import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Components/Frontend/Footer";
import NavBar from "../Components/Frontend/NavBar";
import {
  BsFillPersonFill,
  BsFillBookmarkStarFill,
  BsFillPersonXFill,
  BsFillInfoCircleFill,
  BsPersonPlusFill,
  BsPlusCircleFill,
  BsPlayCircle,
  BsFillFileEarmarkTextFill,
  BsFillFileEarmarkPlusFill,
  BsFillFileEarmarkPostFill,
} from "react-icons/bs";
import useAuth from "../Hooks/useAuth";
import Translate from "../Components/Translate";

const Dashboard = () => {
  const { user, logout, instructor, trans } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const url = `https://cryptic-temple-44121.herokuapp.com/users/account?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);

  const [enrollCourse, setEnrollCourse] = useState([]);
  useEffect(() => {
    fetch(
      `https://cryptic-temple-44121.herokuapp.com/order/account?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setEnrollCourse(data));
  }, []);
  return (
    <>
      <NavBar />
      <div className="secondaryBgColor pt-4 pb-5">
        <div className="container">
          <div className="dashboardProfile bg-white my-5 rounded">
            <div className="dashboardProfile d-flex align-items-center  p-5 justify-content-between">
              <div className="dashboardProfile d-flex justify-content-center align-items-center my-2">
                <div className="">
                  <img
                    width="75px"
                    height="75px"
                    className="profilePic"
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://idronline.org/wp-content/uploads/2021/01/Screen-Shot-2019-02-19-at-1.23.40-PM-300x300-3.jpg"
                    }
                    alt="Profile"
                  />
                </div>
                <div>
                  <h4>{userInfo[0]?.name}</h4>
                  <span className="fs-5 text-secondary">
                    {userInfo[0]?.profession ? (
                      <Translate text={userInfo[0]?.profession} type={trans} />
                    ) : (
                      userInfo[0]?.profession
                    )}
                  </span>
                </div>
              </div>
              <div className="dashboardProfile d-flex align-items-center justify-content-center my-2">
                <div className="contactIcon contactIcon1 rounded-circle">
                  <svg
                    width="28"
                    height="26"
                    viewBox="0 0 28 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.625H8.8C10.1791 1.625 11.5018 2.15764 12.477 3.10574C13.4521 4.05384 14 5.33974 14 6.68056V24.375C14 23.3694 13.5891 22.405 12.8577 21.6939C12.1263 20.9828 11.1343 20.5833 10.1 20.5833H1V1.625Z"
                      stroke="#1089FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M27 1.625H19.2C17.8209 1.625 16.4982 2.15764 15.523 3.10574C14.5479 4.05384 14 5.33974 14 6.68056V24.375C14 23.3694 14.4109 22.405 15.1423 21.6939C15.8737 20.9828 16.8657 20.5833 17.9 20.5833H27V1.625Z"
                      stroke="#1089FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4>{enrollCourse.length}</h4>
                  <span className="fs-6 text-secondary">
                    <Translate text="Enrolled Courses" type={trans} />
                  </span>
                </div>
              </div>
            </div>
            <div className="desktop-dashboard">
              <div className="d-flex justify-content-around">
                <Link to="/dashboard/">
                  <div className="py-3 NavText">
                    <Translate text=" My Profile" type={trans} />
                  </div>
                </Link>
                <Link to="/dashboard/enrolledCourse">
                  <div className="py-3 NavText">
                    <Translate text="Enrolled Course" type={trans} />
                  </div>
                </Link>
                <Link to="/dashboard/attendQuiz">
                  <div className="py-3 NavText">
                    <Translate text=" Tests" type={trans} />
                  </div>
                </Link>
                {instructor && (
                  <>
                    <Link to="/dashboard/myCourse">
                      <div className="py-3 NavText">
                        <Translate text="My Courses" type={trans} />
                      </div>
                    </Link>
                    <Link to="/dashboard/addCourse">
                      <div className="py-3 NavText">
                        <Translate text="Add Course" type={trans} />
                      </div>
                    </Link>
                    <Link to="/dashboard/addStudent">
                      <div className="py-3 NavText">
                        <Translate text="Add Student" type={trans} />
                      </div>
                    </Link>
                    <Link to="/dashboard/quiz">
                      <div className="py-3 NavText">
                        <Translate text="Form Response" type={trans} />
                      </div>
                    </Link>
                    <Link to="/dashboard/addForm">
                      <div className="py-3 NavText">
                        <Translate text="Add Form" type={trans} />
                      </div>
                    </Link>
                  </>
                )}
                <Link to="/dashboard/account">
                  <div className="py-3 NavText">
                    <Translate text="Setting" type={trans} />
                  </div>
                </Link>
                <Link onClick={logout} to="/">
                  <div className="py-3 NavText">
                    <Translate text="Logout" type={trans} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="mobile-dashboard">
              <div className="d-flex justify-content-around">
                <Link to="/dashboard/">
                  <div className="py-3 NavTex">
                    <BsFillPersonFill />
                  </div>
                </Link>
                <Link to="/dashboard/enrolledCourse">
                  <div className="py-3 NavText" title="Enrolled Course">
                    <BsFillBookmarkStarFill />
                  </div>
                </Link>
                <Link to="/dashboard/attendQuiz">
                  <div className="py-3 NavText" title="Enrolled Course">
                    <BsFillFileEarmarkPostFill />
                  </div>
                </Link>
                {instructor && (
                  <>
                    <Link to="/dashboard/myCourse">
                      <div className="py-3 NavText" title="My Course">
                        <BsPlayCircle />
                      </div>
                    </Link>
                    <Link to="/dashboard/addCourse">
                      <div className="py-3 NavText" title="Add Course">
                        <BsPlusCircleFill />
                      </div>
                    </Link>
                    <Link to="/dashboard/addStudent">
                      <div className="py-3 NavText" title="Add Student">
                        <BsPersonPlusFill />
                      </div>
                    </Link>
                    <Link to="/dashboard/addForm">
                      <div className="py-3 NavText" title="Add Form">
                        <BsFillFileEarmarkPlusFill />
                      </div>
                    </Link>
                    <Link to="/dashboard/quiz">
                      <div className="py-3 NavText" title="Form Response">
                        <BsFillFileEarmarkTextFill />
                      </div>
                    </Link>
                  </>
                )}

                <Link to="/dashboard/account">
                  <div className="py-3 NavText" title="Setting">
                    <BsFillInfoCircleFill />
                  </div>
                </Link>
                <Link to="/" onClick={logout}>
                  <div className="py-3 NavText" title="Logout">
                    <BsFillPersonXFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
