import React, { useEffect, useState } from "react";
import useAuth from "./../../Hooks/useAuth";
import { getAuth, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import Translate from "./../Translate";
const auth = getAuth();
const Account = () => {
  const { user, setPassword, UpdatePass, trans } = useAuth();
  const [accountInfo, setAccountInfo] = useState({});
  const [profilePic, setProfilePic] = useState("");
  const [preLoading, setPreLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleInput = (e) => {
    let input = { [e.target.name]: e.target.value };
    setAccountInfo({ ...accountInfo, ...input });
  };

  useEffect(() => {
    setLoading(true);
    const url = `https://cryptic-temple-44121.herokuapp.com/users/account?email=${user.email}`;
    const get = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setAccountInfo(data[0]);
          setLoading(false);
        });
    };
    get();
  }, [user.email]);

  const UpdateUserInfo = (e) => {
    fetch(
      `https://cryptic-temple-44121.herokuapp.com/users/account/${user.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": " application/json",
        },
        body: JSON.stringify(accountInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Account Updated Successfully",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

  const profileImage = async () => {
    setPreLoading(true);
    const formData = new FormData();
    formData.append("file", profilePic);
    formData.append("upload_preset", "elearning");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/elearning-hub/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const file = await res.json();

    if (file.asset_id) {
      updateProfile(auth.currentUser, {
        photoURL: file.url,
      })
        .then(() => {
          // Profile updated!
        })
        .catch((error) => {
          console.log(error);
        });
      setPreLoading(false);
      Swal.fire({
        position: "center-center",
        icon: "success",
        title: "Profile Picture Updated",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  // console.log(user);

  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <div className="bg-white rounded p-4 mb-3">
            <h6 className="py-2 fs-5">
              {" "}
              <Translate text={"Your Information"} type={trans} />
            </h6>
            <div className="w-100">
              <div className="my-4">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  <span>
                    {" "}
                    <Translate text={"Full Name"} type={trans} />
                  </span>
                </label>
                <input
                  onChange={(e) => handleInput(e)}
                  value={accountInfo?.name}
                  name="name"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Type Here"
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  <span>
                    {" "}
                    <Translate text={"Email"} type={trans} />
                  </span>
                </label>
                <input
                  disabled
                  value={user.email}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="example@mail.com"
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  <span>
                    {" "}
                    <Translate text={"What Do You Do"} type={trans} />
                  </span>
                </label>
                <input
                  onChange={(e) => handleInput(e)}
                  name="profession"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Developer"
                  value={accountInfo?.profession}
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  <span>
                    {" "}
                    <Translate text={"About Yourself"} type={trans} />
                  </span>
                </label>
                <textarea
                  onChange={(e) => handleInput(e)}
                  rows="3"
                  name="about"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Type Here"
                  value={accountInfo?.about}
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="my-4">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label d-flex justify-content-between align-items-center"
                    >
                      <span>
                        {" "}
                        <Translate text={"Phone Number"} type={trans} />
                      </span>
                    </label>
                    <input
                      onChange={(e) => handleInput(e)}
                      name="phone"
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="+39 0000000000"
                      value={accountInfo?.phone}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="my-4">
                    <label
                      htmlFor="national"
                      className="form-label d-flex justify-content-between align-items-center"
                    >
                      <span>
                        {" "}
                        <Translate text={"Nationality"} type={trans} />
                      </span>
                    </label>
                    <input
                      onChange={(e) => handleInput(e)}
                      type="text"
                      name="national"
                      className="form-control"
                      id="national"
                      placeholder="Italy"
                      value={accountInfo?.national}
                    />
                  </div>
                </div>
              </div>
              <div className="py-3 text-end">
                <div
                  onClick={UpdateUserInfo}
                  to="/dashboard"
                  className="primaryBgColor px-4 py-3 text-white fw-bold rounded text-uppercase d-inline-block"
                >
                  <Translate text={"Save Changes"} type={trans} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-center bg-white rounded p-4 mb-3">
            <img
              width="150px"
              height="150px"
              className="profilePic"
              src={
                user.photoURL
                  ? user.photoURL
                  : "https://idronline.org/wp-content/uploads/2021/01/Screen-Shot-2019-02-19-at-1.23.40-PM-300x300-3.jpg"
              }
              alt="Profile"
            />
            <input
              className="py-2"
              style={{ width: "110px" }}
              onChange={(e) => setProfilePic(e.target.files[0])}
              type="file"
              name="photo"
              id="profile"
            />
            {preLoading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">
                  {" "}
                  <Translate text={"Loading..."} type={trans} />
                </span>
              </div>
            ) : (
              <button
                onClick={profileImage}
                type="button"
                className="btn btn-outline-primary my-3"
              >
                <Translate text={"Change Image"} type={trans} />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-9">
          <div className="bg-white rounded p-4 mb-3">
            <h6 className=" fs-5">
              {" "}
              <Translate text={"Change Password"} type={trans} />
            </h6>
            <div className="w-100">
              <div className="my-4">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  <span>
                    {" "}
                    <Translate text={"New Password"} type={trans} />
                  </span>
                </label>
                <input
                  onChange={getPassword}
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Type Here"
                />
              </div>
            </div>

            <div className="py-3 text-end">
              <div
                onClick={UpdatePass}
                to="/dashboard"
                className="primaryBgColor px-4 py-3 text-white fw-bold rounded text-uppercase d-inline-block"
              >
                <Translate text={"Update Password"} type={trans} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
