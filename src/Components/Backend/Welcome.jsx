import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Translate from "./../Translate";
const Welcome = () => {
  const { user, trans } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const url = `https://cryptic-temple-44121.herokuapp.com/users/account?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="aboutMe bg-white rounded p-4 mb-3">
            <h6 className="py-2 fs-5">
              <Translate text={"About Me"} type={trans} />
            </h6>
            <span className="text-secondary">
              {/* <Translate text={userInfo[0]?.about} type={trans} />
               */}
              {userInfo[0]?.about}
            </span>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="bg-white rounded p-4 mb-3">
            <h6 className="py-2 fs-5">
              <Translate text={"Information"} type={trans} />
            </h6>
            <div className="row">
              <div className="col-md-6 text-dark">
                <Translate text={"Name"} type={trans} />
              </div>
              <div className="col-md-6 text-secondary">{userInfo[0]?.name}</div>
            </div>
            <div className="row">
              <div className="col-md-6 text-dark">
                <Translate text={"E-mail"} type={trans} />
              </div>
              <div className="col-md-6 text-secondary">{user.email}</div>
            </div>
            <div className="row">
              <div className="col-md-6 text-dark">
                {" "}
                <Translate text={"Nationality"} type={trans} />
              </div>
              <div className="col-md-6 text-secondary">
                {" "}
                {/* <Translate text={userInfo[0]?.national} type={trans} /> */}
                {userInfo[0]?.national}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
