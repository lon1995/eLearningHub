import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import Translate from "../Translate";
const Footer = () => {
  const { trans } = useAuth();

  return (
    <div className="footer">
      <div className="border-bottom border-secondary">
        <div className="container  py-3">
          <div className="row py-5 ">
            <div className="col-md-6">
              <h1 className="fw-bolder text-white display-4">eLearning</h1>
              <p className="w-75 text-secondary py-1">
                <Translate
                  text="eLearning teachers are icons, experts, and industry rock stars
                excited to share their experience, wisdom, and trusted tools
                with you."
                  type={trans}
                />
              </p>
              <p>
                <span className="text-white">
                  <span className="fs-4 mx-2">
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
              </p>
            </div>
            <div className="col-md-2">
              <span className="d-block py-2 text-white fs-5">
                <Translate text="Company" type={trans} />
              </span>
              <span className="d-block py-1 text-secondary">
                <Translate text="About Us" type={trans} />
              </span>
              <span className="d-block py-1 text-secondary">
                <Translate text="Courses" type={trans} />
              </span>
              <span className="d-block py-1 text-secondary">
                <Translate text="Career" type={trans} />
              </span>
              <span className="d-block py-1 text-secondary">
                <Translate text="Affiliate" type={trans} />
              </span>
            </div>
            <div className="col-md-2">
              <span className="d-block py-2 text-white fs-5">
                <Translate text="Support" type={trans} />
              </span>
              <span className="d-block py-1 text-secondary">
                <Translate text=" Help & Supports" type={trans} />
              </span>
              <span className="d-block py-1 text-secondary">
                <Translate text="Privacy Policy" type={trans} />
              </span>
              <span className="d-block py-1 text-secondary">
                <Translate text="FAQs" type={trans} />
              </span>
              <span className="d-block py-1 text-secondary">
                <Translate text="Contact Us" type={trans} />
              </span>
            </div>
            <div className="col-md-2">
              <span className="d-block py-2 text-white fs-5">
                <Translate text="Quick Links" type={trans} />
              </span>
              <span className="d-block py-1 text-secondary">
                <Translate text="Events" type={trans} />
              </span>
              <span className="d-block py-1 text-secondary">
                <Translate text=" Become a Instructor" type={trans} />
              </span>
              <span className="d-block py-1 text-secondary">
                <Translate text="Partnerships" type={trans} />
              </span>
              <span className="d-block py-1 text-secondary">
                <Translate text="Get the app" type={trans} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-3">
        <div className="d-flex text-secondary justify-content-between align-items-center">
          <div className="">
            <span>
              <Translate
                text="© 2022 - eLearning Hub. All rights reserved"
                type={trans}
              />
            </span>
          </div>
          <div className="text-end">
            <span>
              <Translate text="Go To Top" type={trans} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
