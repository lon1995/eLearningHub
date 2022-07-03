import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import NavBar from "../Components/Frontend/NavBar";
import Footer from "../Components/Frontend/Footer";
import Translate from "../Components/Translate";

import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";
import useAuth from "../Hooks/useAuth";

const CourseDetails = () => {
  const { addItem } = useCart();
  const { user, trans } = useAuth();
  const [CourseDetails, setCourseDetails] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://cryptic-temple-44121.herokuapp.com/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourseDetails(data));
  }, []);

  let Navigate = useNavigate();
  const courseBuy = () => {
    addItem(CourseDetails);
    Navigate("/cart");
  };
  console.log(CourseDetails);
  return (
    <div>
      <NavBar />
      <div className="courseBreadcrumb">
        <div className="container pt-5 pb-3  text-secondary">
          <span>
            <Translate text="Home &gt; Course &gt;" type={trans} />
            {CourseDetails.name ? (
              <Translate text={CourseDetails.name} type={trans} />
            ) : (
              CourseDetails.name
            )}
          </span>
          <div className="row d-flex justify-content-between py-4">
            <div className="col-md-12">
              <div className="courseTitle">
                <span className="fs-2 text-black fw-bold">
                  {CourseDetails.name ? (
                    <Translate text={CourseDetails.name} type={trans} />
                  ) : (
                    CourseDetails.name
                  )}
                </span>
                <div className="d-flex align-items-center">
                  <div className="pt-3 ">
                    <img
                      className="profilePic"
                      style={{ width: "70px", height: "70px" }}
                      src={
                        CourseDetails?.instructorPic
                          ? CourseDetails?.instructorPic
                          : "https://png.pngtree.com/png-vector/20190118/ourlarge/pngtree-businessman-vector-icon-png-image_328701.jpg"
                      }
                      alt="Course Profile"
                    />
                  </div>
                  <div className="px-2">
                    <span>
                      <Translate text="Created By" type={trans} />
                    </span>
                    <br />
                    <span className="fw-bold">
                      {CourseDetails?.instructorName}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondaryBgColor">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-8">
              <div className="courseDetails">
                <div className="coursePreview">
                  <img
                    className="rounded w-100"
                    src={CourseDetails?.preview}
                    alt="Preview Photo"
                  />
                </div>

                <div className="my-5">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <div
                        className="NavText ps-0 active h5"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        <Translate text="Overview" type={trans} />
                      </div>
                    </li>
                    <li className="nav-item" role="presentation">
                      <div
                        className="NavText h5"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        <Translate text="Curriculum" type={trans} />
                      </div>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active text-black bg-white p-4 rounded"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <p>
                        <Translate text="Description" type={trans} />{" "}
                      </p>

                      {CourseDetails.overview ? (
                        <Translate text={CourseDetails.overview} type={trans} />
                      ) : (
                        CourseDetails.overview
                      )}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="row bg-white p-4 rounded">
                        <div className="col-md-12">
                          {/* <div>Course Contents</div> */}
                          {CourseDetails?.files?.map((item) => (
                            <>
                              <div className="row align-items-center py-2 my-2">
                                <div className="col-md-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-play-circle"
                                  >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                  </svg>
                                </div>
                                <div className="col-md-9">
                                  <div className="text-black">
                                    <Translate
                                      text={item?.addTitle}
                                      type={trans}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="text-black">
                                    <Translate text={"Locked"} type={trans} />
                                  </div>
                                </div>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="purchaseArea shadow">
                <div className="bg-white rounded p-4 border-bottom">
                  <div className="fs-3 ">€{CourseDetails.price}</div>
                  <div
                    onClick={courseBuy}
                    to="/courseList"
                    className="primaryBgColor d-block px-4 py-3 my-3 text-white fw-bolder rounded text-uppercase text-center pointer"
                  >
                    <Translate text={"BUY NOW"} type={trans} />
                  </div>
                  <hr />
                  <p className="text-black h5">
                    <Translate text={"This course includes:"} type={trans} />
                  </p>
                  <div className="py-1">
                    <img
                      src="https://eduguard-html.netlify.app/dist/images/icon/dollar.png"
                      alt="dollar"
                    />
                    <span className="ms-1">
                      <Translate text={"Full Lifetime Access"} type={trans} />
                    </span>
                  </div>
                  <div className="py-1">
                    <img
                      src="https://eduguard-html.netlify.app/dist/images/icon/clock-2.png"
                      alt="clock"
                    />
                    <span className="ms-1">
                      <Translate
                        text={"30 Days Money Back Guarantee"}
                        type={trans}
                      />
                    </span>
                  </div>
                  <div className="py-1">
                    <img
                      src="https://eduguard-html.netlify.app/dist/images/icon/paper-plus.png"
                      alt="paper"
                    />
                    <span className="ms-1">
                      <Translate text={"Free Exercises File"} type={trans} />
                    </span>
                  </div>
                  <div className="py-1">
                    <img
                      src="https://eduguard-html.netlify.app/dist/images/icon/airplay.png"
                      alt="airplay"
                    />
                    <span className="ms-1">
                      <Translate
                        text={"Access on Mobile , Tablet and TV"}
                        type={trans}
                      />
                    </span>
                  </div>
                  <div className="py-1">
                    <img
                      src="https://eduguard-html.netlify.app/dist/images/icon/clipboard.png"
                      alt="clipboard"
                    />
                    <span className="ms-1">
                      <Translate
                        text={"Certificate of Completion"}
                        type={trans}
                      />
                    </span>
                  </div>
                  <hr />
                  <p className="h5">
                    <Translate text={"Share This Course"} type={trans} />
                  </p>
                  <span className="text-black">
                    <span className="fs-4 me-2">
                      <BsFacebook />
                    </span>
                    <span className="fs-4 mx-2">
                      <BsInstagram />
                    </span>
                    <span className="fs-4 mx-2">
                      <BsTwitter />
                    </span>
                    <span className="fs-4 mx-2">
                      <BsYoutube />
                    </span>
                    <span className="fs-4 mx-2">
                      <BsLinkedin />
                    </span>
                  </span>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;
