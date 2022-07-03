import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Translate from "./../../Translate";
import useAuth from "./../../../Hooks/useAuth";
const TotalStudent = () => {
  const [totalUsers, setTotalUser] = useState([]);
  const { trans } = useAuth();
  useEffect(() => {
    fetch("https://cryptic-temple-44121.herokuapp.com/users/student")
      .then((res) => res.json())
      .then((data) => setTotalUser(data));
  }, []);

  const DeleteUser = (id) => {
    const url = `https://cryptic-temple-44121.herokuapp.com/users/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            position: "center-center",
            icon: "error",
            title: "Student Deleted Successfully",
            showConfirmButton: false,
            timer: 2500,
          });

          const remainingUser = totalUsers.filter((user) => user._id !== id);
          setTotalUser(remainingUser);
        }
      });
  };
  console.log(totalUsers);
  return (
    <div>
      <div>
        <div className="h1 fw-bolder">
          <Translate text="Total Student" type={trans} />
        </div>
        <hr />
        <div className="bg-white rounded p-4 my-5">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">
                  <Translate text="Name" type={trans} />
                </th>
                <th scope="col">
                  <Translate text="Email" type={trans} />
                </th>
                <th scope="col">
                  <Translate text="Category" type={trans} />
                </th>
                <th scope="col">
                  <Translate text="Action" type={trans} />
                </th>
              </tr>
            </thead>
            <tbody>
              {totalUsers?.map((user) => (
                <tr>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    <Translate text={user?.category} type={trans} />
                  </td>
                  <td>
                    <div className="NavText">
                      <button
                        onClick={() => DeleteUser(user?._id)}
                        type="button"
                        className="btn btn-dark"
                      >
                        <Translate text="Remove" type={trans} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TotalStudent;
