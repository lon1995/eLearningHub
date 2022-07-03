import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Translate from "./../../Translate";
const EnrolledCourse = () => {
  const [enrollCourse, setEnrollCourse] = useState([]);
  const { user, trans } = useAuth();
  useEffect(() => {
    fetch(
      `https://cryptic-temple-44121.herokuapp.com/order/account?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setEnrollCourse(data));
  }, []);
  console.log(enrollCourse);
  return (
    <div>
      <div className="row">
        {enrollCourse.map((i, index) => (
          <div key={index} className="col-md-4 my-2">
            {i.purchasedItems.items.map((item, index) => (
              <div key={index}>
                <div className="courseCard m-1 rounded">
                  <img
                    style={{ height: "240px" }}
                    src={item.preview}
                    alt="Thumbnail"
                  />
                  <div className="p-3">
                    <span className="py-2 d-inline-block fs-5">
                      <Translate text={item.name} type={trans} />
                    </span>
                    <div className="d-flex justify-content-between align-items-center py-1">
                      <div className="d-flex justify-content-between align-items-center">
                        <img
                          className="rounded-pill"
                          style={{ width: "40px", height: "40px" }}
                          src={
                            item?.instructorPic
                              ? item?.instructorPic
                              : "https://png.pngtree.com/png-vector/20190118/ourlarge/pngtree-businessman-vector-icon-png-image_328701.jpg"
                          }
                          alt="Thumbnail"
                        />
                        <span className="ps-1">
                          {item?.instructorProfile?.name}
                        </span>
                      </div>
                      <span className="text-secondary">
                        {" "}
                        <Translate text="Developer" type={trans} />
                      </span>
                    </div>
                  </div>
                  <Link to={`/watch/${item._id}`}>
                    <div className="p-3 primaryBgColor text-white text-center text-uppercase fw-bold pointer">
                      <span>
                        {" "}
                        <Translate text="Watch Course" type={trans} />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourse;
