import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import Translate from "./../../Translate";

const TotalCourse = () => {
  const { trans } = useAuth();
  const [totalCourse, setTotalCourse] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-temple-44121.herokuapp.com/courses")
      .then((res) => res.json())
      .then((data) => setTotalCourse(data));
  }, []);

  const DeleteCourse = (id) => {
    const url = `https://cryptic-temple-44121.herokuapp.com/courses/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            position: "center-center",
            icon: "error",
            title: "Course Deleted Successfully",
            showConfirmButton: false,
            timer: 2500,
          });
          const remainingUser = totalCourse.filter((user) => user._id !== id);
          setTotalCourse(remainingUser);
        }
      });
  };
  return (
    <div>
      <div className="h1 fw-bolder">
        <Translate text={"Total Course"} type={trans} />
      </div>
      <hr />
      <div className="bg-white rounded p-4 my-5">
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">
                <Translate text={"Title"} type={trans} />
              </th>
              <th scope="col">
                <Translate text={"By"} type={trans} />
              </th>
              <th scope="col">
                <Translate text={"Price"} type={trans} />
              </th>
              <th scope="col">
                <Translate text={"Action"} type={trans} />
              </th>
            </tr>
          </thead>
          <tbody>
            {totalCourse.map((course, index) => (
              <tr key={index}>
                <td>
                  <Translate text={course.name} type={trans} />
                </td>
                <td>{course.instructorName}</td>
                <td>${course.price}</td>
                <td>
                  <div className="NavText">
                    <button
                      onClick={() => DeleteCourse(course._id)}
                      type="button"
                      className="btn btn-dark"
                    >
                      <Translate text={"Remove"} type={trans} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalCourse;
