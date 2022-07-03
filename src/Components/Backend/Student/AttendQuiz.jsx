import React, { useEffect, useState } from "react";
import { getAll, postData } from "../../../api/api";
import useAuth from "../../../Hooks/useAuth";
import { uiAnswerQuizData } from "../QuizCom";

import Translate from "./../../Translate";

const AttendQuiz = () => {
  const [show, setShow] = useState("quiz");

  const [load, setLoad] = useState(true);
  const [quiz, setQuiz] = useState([]);

  const [subQuiz, setsubIndex] = useState(0);
  const [subIndex, setSubIndex] = useState([]);

  const { user, trans } = useAuth();
  useEffect(() => {
    setsubIndex(0);
    setSubIndex([]);
    const get = async () => {
      const fetch = await getAll(`quiz/attend/${user?.email}`);
      console.log(fetch);
      setQuiz(fetch);
      setLoad(false);
    };
    get();
  }, [show]);

  const [submitted, setSubmitted] = useState([]);

  console.log(submitted, quiz);

  useEffect(() => {
    setsubIndex(0);
    setSubIndex([]);
    const get = async () => {
      const fetch = await getAll(`quiz/save/${user?.email}`);
      setSubmitted(fetch);
      setLoad(false);
    };
    get();
  }, [show]);

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const chars =
      show === "quiz"
        ? quiz?.map((i) => i.subject)
        : submitted?.map((i) => i.subject);
    const uniqueChars = [...new Set(chars)];
    setSubjects(uniqueChars);
  }, [quiz]);

  const handlesubIndex = (data) => {
    const value =
      show === "quiz"
        ? quiz?.filter((i) => i.subject == data)
        : submitted?.filter((i) => i.subject == data);
    setSubIndex(value);
  };

  const qsInfo = quiz?.find((i) => i?._id === subIndex[subQuiz]?._id);

  const [finalSubmit, setFinalSubmit] = useState([]);
  const handleQuestion = (id, ans, type, e) => {
    const qsInfo = quiz.find((i) => i._id === subIndex[subQuiz]._id);
    const qsIdx = quiz.findIndex((i) => i._id === subIndex[subQuiz]._id);
    let qsData = qsInfo.questions.find((t) => t.id == id);

    if (type == 0) {
      if (qsData) {
        qsData["studentAns"] = ans;
        if (ans == qsData.ans) {
          qsData["right"] = 1;
        } else {
          qsData["right"] = 0;
        }
      }
    }

    function arrays_equal(a, b) {
      return !!a && !!b && !(a < b || b < a);
    }

    if (type == 1) {
      const { name, checked } = e.target;
      if (qsData) {
        if (checked) {
          if (qsData.studentAns) {
            qsData["studentAns"] = [...qsData.studentAns, ans];
          } else {
            qsData["studentAns"] = [ans];
          }
        } else {
          if (qsData.studentAns) {
            qsData["studentAns"] = qsData.studentAns.filter((i) => i != ans);
          } else {
            qsData["studentAns"] = [];
          }
        }
        qsData["right"] = arrays_equal(qsData.ans, qsData.studentAns) ? 1 : 0;
      }
    }
    if (type == 2) {
      if (qsData) {
        qsData["studentAns"] = ans;
        if (ans == qsData.ans) {
          qsData["right"] = 1;
        } else {
          qsData["right"] = 0;
        }
      }
    }
    setFinalSubmit(qsInfo);
    const qsFilter = quiz.filter((i) => i._id != subIndex[subQuiz]._id);
    qsFilter.splice(qsIdx, 0, qsInfo);
    setQuiz(qsFilter);
  };

  const handleSave = async () => {
    if (finalSubmit.length == 0) return;
    const postNow = {
      qsRef: finalSubmit._id,
      questions: finalSubmit?.questions,
      user: user?.email,
      total: qsInfo?.questions?.length,
      got: (qsInfo?.questions?.filter((i) => i?.right)).length,
      instructorUid: subIndex[subQuiz]?.instructorUid,
      subject: subIndex[subQuiz]?.subject,
    };
    const save = await postData(
      `quiz/save/${user?.email}/${subIndex[subQuiz]._id}`,
      postNow
    );

    if (save.modifiedCount > 0) {
    window.location.reload();
    }
  };

  if (load) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">
          <Translate text="Loading..." type={trans} />
        </span>
      </div>
    );
  }

  return (
    <div>
      <div className="form_responses_submitted text-center py-4 w-100 bg-white text-black">
        <div className="fs-4 py-4">
          <Translate text="Attend Test" type={trans} />
        </div>
        <div className="d-flex justify-content-center">
          <div
            className="form_responses_submitted_forms m-2"
            onClick={() => setShow("saved")}
          >
            <Translate text="Your Submitted Test" type={trans} />
          </div>
          <div
            className="form_responses_pending_forms m-2"
            onClick={() => setShow("quiz")}
          >
            <Translate text="Pending Test" type={trans} />
          </div>
        </div>
      </div>

      {show == "quiz" ? (
        <>
          {subjects.map((i, index) => (
            <div
              className="form_responses_result my-4"
              onClick={() => handlesubIndex(i)}
            >
              {index + 1}. {i}
            </div>
          ))}
          {quiz.length === 0 && (
            <div className="form_question_show fs-3 my-4 bg-white px-4 py-3 text-center">
              <Translate
                text="Right Now, You Have Not Any Test Exam."
                type={trans}
              />
            </div>
          )}
          {subIndex.length > 0 && (
            <div>
              {/* <div className="my-2">
                {subIndex.map((i, idx) => (
                  <button
                    className="btn btn-warning my-2 m-2"
                    onClick={() => setsubIndex(idx)}
                  >
                    No {idx + 1}
                  </button>
                ))}
              </div> */}

              <div className="my-2">
                <div className="form_border">
                  {/* Subject: */}
                  <div className="form_title fs-3">
                    {subIndex[subQuiz]?.subject}
                  </div>
                </div>
              </div>
              <div className="form_question_show my-4 bg-white px-4 py-3">
                {/* <h4 className="my-2">Questions:</h4> */}
                <div className="row">
                  <div className="col-md-10">
                    {subIndex[subQuiz]?.questions?.map((i, idx) => (
                      <div>
                        <div className="my-2 bg-white p-2">
                          {/* <div className="fw-bold text-primary my-2">
                            <span>Question {idx + 1}</span>
                          </div> */}
                          <span className="form_question_show_fontSize pb-4">
                            {idx + 1}. {i.question}
                          </span>
                          <div>
                            <div className="row">
                              {uiQuizData(
                                i?.type,
                                i,
                                idx,
                                handleQuestion,
                                trans
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      className="form_question_add_btn"
                      onClick={() => handleSave()}
                    >
                      <Translate text="Submit Your Test" type={trans} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="my-2">
          {subjects.map((i, index) => (
            <div
              className="form_responses_result my-4"
              onClick={() => handlesubIndex(i)}
            >
              {index + 1}.{i}
            </div>
          ))}

          {subIndex.length > 0 && (
            <>
              {/* <h4 className="my-2">Questions:</h4> */}
              <div className="form_border">
                {/* Subject: */}
                <div className="form_title fs-3">
                  {subIndex[subQuiz]?.subject}
                </div>
              </div>
              <div className="row justify-content-between mx-0">
                <div className="col-md-9 form_question_show my-4 bg-white">
                  <div className="">
                    {subIndex[subQuiz]?.questions?.map((i, idx) => (
                      <div className="">
                        <div className="my-2 bg-white p-2">
                          <div className="fw-bold text-primary my-2"></div>
                          <span className="form_question_show_fontSize pb-4">
                            {idx + 1}.{" "}
                            <Translate text={i.question} type={trans} />
                          </span>
                          <div>
                            <div className="row">
                              {uiAnswerQuizData(
                                i?.type,
                                i,
                                idx,
                                handleQuestion,
                                trans
                              )}
                            </div>
                          </div>
                        </div>
                        <hr />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-md-3 gx-0 ">
                  <div className="form_border ms-2 my-4">
                    <div className="form_title">
                      <div className="mx-2 py-4 bg-white text-center h4 p-3">
                        <span>
                          {" "}
                          <Translate text="Total Mark:" type={trans} />{" "}
                          <Translate
                            text={subIndex[subQuiz]?.total}
                            type={trans}
                          />
                        </span>
                        <br /> <hr />
                        <span className="fw-bolder">
                          {" "}
                          <Translate text="Your Result:" type={trans} />{" "}
                          <Translate
                            text={subIndex[subQuiz]?.got}
                            type={trans}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

const uiQuizData = (type, i, idx, handleQuestion, trans) => {
  switch (type) {
    case 0:
      return (
        <>
          <div className="col-md-3">
            <input
              type="radio"
              name={`studentAns${i?._id}${idx}`}
              value={i.right ? "on" : "off"}
              onChange={(e) => handleQuestion(i.id, "answer1", type)}
              className="mx-2 form-check-input"
            />
            <span className="form_question_ans_fontSize">{i.answer1}</span>
          </div>
          <div className="col-md-3">
            <input
              type="radio"
              name={`studentAns${i?._id}${idx}`}
              onChange={(e) => handleQuestion(i.id, "answer2", type)}
              className="mx-2 form-check-input"
            />
            <span className="form_question_ans_fontSize">{i.answer2}</span>
          </div>
          <div className="col-md-3">
            <input
              type="radio"
              name={`studentAns${i?._id}${idx}`}
              onChange={(e) => handleQuestion(i.id, "answer3", type)}
              className="mx-2 form-check-input"
            />
            <span className="form_question_ans_fontSize">{i.answer3}</span>
          </div>
          <div className="col-md-3">
            <input
              type="radio"
              name={`studentAns${i?._id}${idx}`}
              onChange={(e) => handleQuestion(i.id, "answer4", type)}
              className="mx-2 form-check-input"
            />
            <span className="form_question_ans_fontSize">{i.answer4}</span>
          </div>
        </>
      );
    case 1:
      return (
        <>
          <div className="col-md-3">
            <input
              type="checkbox"
              onChange={(e) => handleQuestion(i.id, "answer1", type, e)}
              className="mx-2 form-check-input"
            />

            <span className="form_question_ans_fontSize">{i.answer1}</span>
          </div>
          <div className="col-md-3">
            <input
              type="checkbox"
              onChange={(e) => handleQuestion(i.id, "answer2", type, e)}
              className="mx-2 form-check-input"
            />
            <span className="form_question_ans_fontSize">{i.answer2}</span>
          </div>
          <div className="col-md-3">
            <input
              type="checkbox"
              onChange={(e) => handleQuestion(i.id, "answer3", type, e)}
              className="mx-2 form-check-input"
            />

            <span className="form_question_ans_fontSize">{i.answer3}</span>
          </div>
          <div className="col-md-3">
            <input
              type="checkbox"
              onChange={(e) => handleQuestion(i.id, "answer4", type, e)}
              className="mx-2 form-check-input"
            />
            <span className="form_question_ans_fontSize">{i.answer4}</span>
          </div>
        </>
      );
    case 2:
      return (
        <div>
          <span className="form_question_ans_fontSize">
            <input
              type="text"
              onChange={(e) => handleQuestion(i.id, e.target.value, type)}
              className="mx-2 form-control"
              placeholder="Answer"
            />
          </span>
        </div>
      );
  }
};

export default AttendQuiz;
