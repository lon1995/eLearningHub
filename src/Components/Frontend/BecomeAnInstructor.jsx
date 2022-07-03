import React from "react";
import { Link } from "react-router-dom";

const BecomeAnInstructor = () => {
  return (
    <div className="becomeInstructor py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <div className="InstructorBox text-center">
              <img
                src="https://eduguard-html.netlify.app/dist/images/event/image02.png"
                alt="Instructor Apply"
              />
              <div className="p-5">
                <p className="fw-bolder fs-2">Become An Student</p>
                <p className="text-secondary">
                  Praesent ultricies nulla ac congue bibendum. Aliquam tempor
                  euismod purus posuere gravida. Praesent augue sapien,
                  vulputate eu imperdiet eget, tempor at enim.
                </p>
                <Link
                  to="/studentRegister"
                  className="primaryBgColor d-inline-block px-4 py-3 text-white fw-bolder rounded text-uppercase"
                >
                  Apply As A Student
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="InstructorBox text-center">
              <img
                src="https://eduguard-html.netlify.app/dist/images/event/image01.png"
                alt="Student Apply"
              />
              <div className="p-5">
                <p className="fw-bolder fs-2">Become An Instructor</p>
                <p className="text-secondary">
                  Praesent ultricies nulla ac congue bibendum. Aliquam tempor
                  euismod purus posuere gravida. Praesent augue sapien,
                  vulputate eu imperdiet eget, tempor at enim.
                </p>
                <Link
                  to="/instructorRegister"
                  className="primaryBgColor d-inline-block px-4 py-3 text-white fw-bolder rounded text-uppercase"
                >
                  Apply As A Instructor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAnInstructor;
