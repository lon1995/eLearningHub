import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useTranslate } from "../useTranslate";
import BannerPerson from "./../../Images/banner-person.png";
import Translate from "./../Translate";
const Header = () => {
  const { trans } = useAuth();
  return (
    <div className="Header">
      <div className="container">
        <div className="row justify-content-center align-items-center py-2">
          <div className="col-md-6 py-5">
            <h1 className="display-3 fw-bolder">
              <Translate
                text="Learn With Expert Anytime Anywhere."
                type={trans}
              />
            </h1>
            <p className="fs-5 py-2 text-secondary">
              {useTranslate(
                "Our Mission Is To Help People To Find The Best Course Online AndLearn With Expert Anytime, Anywhere.",
                trans
              )}
            </p>
            <Link
              to="/courseList"
              className="primaryBgColor d-inline-block px-4 py-3 text-white fw-bolder rounded"
            >
              <Translate text={"Start Your Learning"} type={trans} />
            </Link>
          </div>
          <div className="col-md-6">
            <img
              className="bannerImg w-100"
              src={BannerPerson}
              alt="Banner Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
