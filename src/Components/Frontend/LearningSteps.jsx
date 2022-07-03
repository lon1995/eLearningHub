import React from "react";
import useAuth from "../../Hooks/useAuth";
import Translate from "./../Translate";
const LearningSteps = () => {
  const { trans } = useAuth();
  return (
    <div className="container">
      <div className="py-5">
        <div className="row align-items-center py-5">
          <div className="col-md-6">
            <h1 className="fw-bolder">
              <Translate text={"Eduguard Simple"} type={trans} /> <br />
              <Translate text={"Learning Steps"} type={trans} />
            </h1>
            <div className="d-flex py-3">
              <div className="LearningDots">
                <span className="fw-bold">01.</span>
              </div>
              <div className="w-75">
                <span className="fs-5">
                  <Translate text={"Make Your Own Place."} type={trans} />
                </span>
                <br />
                <span className="fs-6 text-secondary">
                  <Translate
                    text={"Get inspired. Learn new skills. Make discoveries."}
                    type={trans}
                  />
                </span>
              </div>
            </div>
            <div className="d-flex py-3">
              <div className="LearningDots">
                <span className="fw-bold">02.</span>
              </div>
              <div className="w-75">
                <span className="fs-5">
                  <Translate
                    text={"Find Best Course With Better Filtter."}
                    type={trans}
                  />
                </span>
                <br />
                <span className="fs-6 text-secondary">
                  <Translate
                    text={"Share expertise. Earn money. Give back."}
                    type={trans}
                  />
                </span>
              </div>
            </div>
            <div className="d-flex py-3">
              <div className="LearningDots">
                <span className="fw-bold">03.</span>
              </div>
              <div className="w-75">
                <span className="fs-5">
                  <Translate
                    text={"And Become a Master in Your Field."}
                    type={trans}
                  />
                </span>
                <br />
                <span className="fs-6 text-secondary">
                  <Translate
                    text={"Be curious. Make an impact. Live a full life."}
                    type={trans}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="w-100"
              src={
                "https://seobrien.com/wp-content/uploads/2019/10/marketing-education-entrepreneurship.jpg"
              }
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningSteps;
