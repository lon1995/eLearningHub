import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Translate from "./../Translate";
const PopularCourses = () => {
  const { trans } = useAuth();
  const [CourseData, setCourseData] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-temple-44121.herokuapp.com/courses")
      .then((res) => res.json())
      .then((data) => setCourseData(data));
  }, []);

  return (
    <div className="popularCourse py-1">
      <div className="container py-5">
        <h1 className="fw-bolder py-5">
          <Translate text={"Our Popular Courses"} type={trans} />
        </h1>
        <div className="row">
          {CourseData.map((i, index) => (
            <div key={index} className="col-md-4 my-2">
              <div className="courseCard m-1 rounded">
                <img
                  style={{ height: "240px" }}
                  src={
                    i?.preview
                      ? i?.preview
                      : "https://articulate-heroes.s3.amazonaws.com/uploads/rte/qnzaikyl_Roundup--animation-examples.png"
                  }
                  alt="Thumbnail"
                />
                <div className="p-3 border-bottom">
                  <Link to={`/courses/${i._id}`}>
                    <span className="py-2 d-inline-block fs-5 text-black">
                      <Translate text={i?.name} type={trans} />
                    </span>
                  </Link>
                  <div className="d-flex justify-content-between align-items-center py-1">
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        className="rounded-pill"
                        style={{ width: "40px", height: "40px" }}
                        src={
                          i?.instructorPic
                            ? i?.instructorPic
                            : "https://idronline.org/wp-content/uploads/2021/01/Screen-Shot-2019-02-19-at-1.23.40-PM-300x300-3.jpg"
                        }
                        alt="Instructor"
                      />
                      <span className="ps-1">{i?.instructorName}</span>
                    </div>
                    <span>
                      €<Translate text={i?.price} type={trans} />
                    </span>
                  </div>
                </div>
                <div className="p-3 d-flex justify-content-between align-items-center">
                  <span>
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9C1 9 4 3 9.25 3C14.5 3 17.5 9 17.5 9C17.5 9 14.5 15 9.25 15C4 15 1 9 1 9Z"
                        stroke="#1089FF"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9.25 11.25C10.4926 11.25 11.5 10.2426 11.5 9C11.5 7.75736 10.4926 6.75 9.25 6.75C8.00736 6.75 7 7.75736 7 9C7 10.2426 8.00736 11.25 9.25 11.25Z"
                        stroke="#1089FF"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="text-black-50">
                      <Translate text={i.category} type={trans} />
                    </span>
                  </span>
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 2.25H6C6.79565 2.25 7.55871 2.56607 8.12132 3.12868C8.68393 3.69129 9 4.45435 9 5.25V15.75C9 15.1533 8.76295 14.581 8.34099 14.159C7.91903 13.7371 7.34674 13.5 6.75 13.5H1.5V2.25Z"
                        stroke="#00AF91"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M16.5 2.25H12C11.2044 2.25 10.4413 2.56607 9.87868 3.12868C9.31607 3.69129 9 4.45435 9 5.25V15.75C9 15.1533 9.23705 14.581 9.65901 14.159C10.081 13.7371 10.6533 13.5 11.25 13.5H16.5V2.25Z"
                        stroke="#00AF91"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>{" "}
                    {i?.files?.length}{" "}
                    <Translate text={"Lesson"} type={trans} />
                  </span>
                </div>
              </div>
            </div>
          )).splice(0, 6)}
        </div>
        <div className="text-center py-5">
          <Link
            to="/courseList"
            className="primaryBgColor d-inline-block px-4 py-3 text-white fw-bolder rounded text-uppercase"
          >
            <Translate text={"Browse All Course"} type={trans} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
