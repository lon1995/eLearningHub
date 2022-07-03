import React from "react";
import AboutImg from "./../Images/contactUs.jpg";
import MeetInstructor from "./../Components/Frontend/MeetInstructor";
import NavBar from "../Components/Frontend/NavBar";
import Footer from "../Components/Frontend/Footer";
import Translate from "../Components/Translate";
import useAuth from "../Hooks/useAuth";
const About = () => {
  const { trans } = useAuth();
  return (
    <>
      <NavBar />
      <div className="courseBreadcrumb">
        <div className="container py-5 text-secondary">
          <span>
            {" "}
            <Translate text="Home &gt; About" type={trans} />{" "}
          </span>
        </div>
      </div>
      <div className="container my-5">
        <div className="row py-5 align-items-center">
          <div className="col-md-6">
            <div className="about-img">
              <img className="rounded-3 w-100" src={AboutImg} alt="AboutUs" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="aboutInfo">
              <h1 className="fw-bolder">
                {" "}
                <Translate text="A Great Place To Grow." type={trans} />
              </h1>
              <p>
                <Translate
                  text="Whether we are eLearning or not, our goal is to help those who
                seriously want to be programming heroes."
                  type={trans}
                />
              </p>
              <p>
                <Translate
                  text="The thing I thought couldn’t be possible a year or two ago, is
                actually happening."
                  type={trans}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-6">
            <div className="aboutBoxBlack bg-dark rounded p-5 border border-3 border-dark">
              <h2 className="text-white">
                {" "}
                <Translate text="Who We Are" type={trans} />
              </h2>
              <p className="text-secondary">
                <Translate
                  text="At eLearning, we have seen again and again how the seemingly
                simple act of creating can be a force for growth, change, and
                discovery in peoples lives."
                  type={trans}
                />
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="aboutBoxBlack border border-3 border-light rounded p-5">
              <h2>
                {" "}
                <Translate text="What We Are" type={trans} />
              </h2>
              <p className="text-secondary">
                <Translate
                  text="eLearning is an online learning community with thousands of
                classes for creative and curious people, on topics including
                illustration, design, photography, video, freelancing, and more."
                  type={trans}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <MeetInstructor />
      <Footer />
    </>
  );
};

export default About;
