import React, { useEffect, useState } from "react";
import Footer from "../Components/Frontend/Footer";
import NavBar from "../Components/Frontend/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useAuth from "../Hooks/useAuth";
import Translate from "../Components/Translate";
const Instructor = () => {
  const [instructorData, setInstructorData] = useState([]);
  const { trans } = useAuth();
  useEffect(() => {
    fetch("https://cryptic-temple-44121.herokuapp.com/users/instructor")
      .then((res) => res.json())
      .then((data) => setInstructorData(data));
  }, []);

  return (
    <div>
      <NavBar />
      <div className="courseBreadcrumb">
        <div className="container py-5 text-secondary">
          <span>
            <Translate text=" Home &gt; Instructor" type={trans} />
          </span>
        </div>
      </div>
      <div className="container pt-4 pb-5 mt-2 mb-5">
        <h1 className="text-center fw-bolder my-5">
          <Translate text="Meet Our Best Instructor" type={trans} />
        </h1>
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
      <Footer />
    </div>
  );
};

export default Instructor;
