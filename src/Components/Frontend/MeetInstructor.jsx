import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useAuth from "../../Hooks/useAuth";
import Translate from "./../Translate";
const MeetInstructor = () => {
  const { trans } = useAuth();
  const [instructorData, setInstructorData] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-temple-44121.herokuapp.com/users/instructor")
      .then((res) => res.json())
      .then((data) => setInstructorData(data));
  }, []);

  return (
    <div className="py-5">
      <div className="container py-3">
        <h1 className="text-center fw-bolder">
          <Translate text={"Meet Our Best Instructor"} type={trans} />
        </h1>
        <div>
          <div>
            <Swiper
              watchSlidesProgress={true}
              slidesPerView={2}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              className="mySwiper"
            >
              {instructorData.map((i, index) => (
                <SwiperSlide key={index} className="mx-2 my-5">
                  <div>
                    <img
                      height="260px"
                      className="w-100 position-relative"
                      src={
                        i.preview
                          ? i.preview
                          : "https://png.pngtree.com/png-vector/20190118/ourlarge/pngtree-businessman-vector-icon-png-image_328701.jpg"
                      }
                      alt="Instructor"
                    />
                    <div className="instructorInfo p-3 border border-top-0">
                      <span className="fw-bold fs-5">{i.name}</span> <br />
                      <span className="d-inline-block text-secondary">
                        <Translate text={i.category} type={trans} />
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetInstructor;
