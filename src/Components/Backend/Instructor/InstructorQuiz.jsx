import React, { useEffect, useState } from "react";
import { getAll } from "../../../api/api";
import useAuth from "../../../Hooks/useAuth";
import QuizCom from "../QuizCom";
import Translate from "./../../Translate";

const InstructorQuiz = () => {
  const [show, setShow] = useState("quiz");
  const [load, setLoad] = useState(true);
  const [quiz, setQuiz] = useState([]);

  const { user, trans } = useAuth();
  useEffect(() => {
    const get = async () => {
      const fetch = await getAll(`quiz/instructor/${user.email}`);
      setQuiz(fetch);
      setLoad(false);
    };
    get();
  }, []);

  const [submitted, setSubmitted] = useState([]);

  useEffect(() => {
    const get = async () => {
      const fetch = await getAll(`quiz/attended/instructor/${user?.email}`);
      setSubmitted(fetch);
      setLoad(false);
    };
    get();
  }, [show]);

  console.log(submitted);

  if (load) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <div>
      <div className="form_responses_submitted text-center py-4 w-100 bg-white text-black">
        <div className="fs-4 py-4">
          {" "}
          <Translate text="Responses" type={trans} />
        </div>

        <div className="d-flex justify-content-center">
          <div
            className="form_responses_submitted_forms m-2"
            onClick={() => setShow("saved")}
          >
            <Translate text="Submitted Forms" type={trans} />
          </div>
          <div
            className="form_responses_pending_forms m-2"
            onClick={() => setShow("quiz")}
          >
            <Translate text="All Forms" type={trans} />
          </div>
        </div>
      </div>
      <QuizCom
        load={load}
        quiz={show == "quiz" ? quiz : submitted}
        submitted={show == "quiz" ? false : true}
      />
    </div>
  );
};

export default InstructorQuiz;
