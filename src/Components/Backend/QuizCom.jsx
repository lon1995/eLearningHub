import React, { useEffect, useState } from "react";
import { getAll, patchData } from "../../api/api";
import useAuth from "../../Hooks/useAuth";
import Translate from "./../Translate";
import { BsX } from "react-icons/bs";

const QuizCom = ({ quiz, submitted }) => {
  const [users, setUsers] = useState([]);
  const [subQuiz, setsubIndex] = useState(0);
  const [subIndex, setSubIndex] = useState([]);
  const { trans } = useAuth();

  const [subjects, setSubjects] = useState([]);

  const [showUser, setShowUser] = useState("");
  const [userQuiz, setUserQuiz] = useState([]);
  const [userQsLoading, setUserQsLoading] = useState(false);

  useEffect(() => {
    if (showUser) {
      setUserQsLoading(true);
      const get = async () => {
        const fetch = await getAll(`user/submittedQuiz/${showUser}`);
        setUserQuiz(
          fetch.filter((i) => i.subject === subIndex?.[subQuiz]?.subject)
        );
        setUserQsLoading(false);
      };
      get();
    }
  }, [showUser, subIndex]);

  useEffect(() => {
    const getUser = async () => {
      const fetch = await getAll("users");
      setUsers(fetch);
    };
    getUser();
  }, []);

  const [students, setStudents] = useState([]);

  useEffect(() => {
    setSubIndex([]);
    setsubIndex(0);
    const chars = quiz?.map((i) => i.subject);
    const uniqueChars = [...new Set(chars)];
    setSubjects(uniqueChars);
  }, [quiz]);

  const handlesubIndex = (data) => {
    setShowUser("");
    setUserQuiz([]);
    const value = quiz.filter((i) => i.subject == data);
    setSubIndex(value);
  };

  const assignUser = async () => {
    const data = await patchData(
      `quiz/updateUser/${subIndex[subQuiz]._id}`,
      students
    );
    if (data?.modifiedCount) return alert("Student Added");
  };

  console.log();
  return (
    <div>
      {subjects.map((i, index) => (
        <div
          className="form_responses_result my-4"
          onClick={() => handlesubIndex(i)}
        >
          {index + 1}. {i}
        </div>
      ))}

      {subIndex.length > 0 && (
        <div>
          <div className="row">
            <div className="col-md-8">
              <div className="form_border">
                <div className="form_title fs-3">
                  <p>{subIndex?.[subQuiz]?.subject}</p>
                </div>
              </div>
              {submitted ? (
                <div className="form_question_show my-4 bg-white px-4 py-3">
                  {userQuiz?.length == 0 ? (
                    <div>Form Not Attended</div>
                  ) : userQsLoading ? (
                    <>
                      <h1>Loading...</h1>
                    </>
                  ) : (
                    <>
                      {userQuiz.map((t) =>
                        t?.questions?.map((i, idx) => (
                          <div>
                            <div className="my-2 bg-white p-2">
                              <span className="form_question_show_fontSize pb-4">
                                {idx + 1}. {i.question}
                              </span>
                              <div>
                                <div className="row">
                                  {uiAnswerQuizData(i?.type, i)}
                                </div>
                              </div>
                            </div>
                            <hr />
                          </div>
                        ))
                      )}
                    </>
                  )}
                </div>
              ) : (
                <div className="form_question_show my-4 bg-white px-4 py-3">
                  {subIndex[subQuiz]?.questions?.map((i, idx) => (
                    <div>
                      <div className="my-2 bg-white p-2">
                        <span className="form_question_show_fontSize pb-4">
                          {idx + 1}. {i.question}
                        </span>
                        <div>
                          <div className="row">
                            {uiAnswerQuizData(i?.type, i)}
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="col-md-4">
              <div className="form_border text-center mb-3">
                <div className="form_title text-center">
                  <div className="form_assign_title text-center">
                    {
                      <Translate
                        text={submitted ? "Submitted" : "Assigned"}
                        type={trans}
                      />
                    }
                  </div>
                  {submitted ? (
                    <>
                      <div className="my-2  text-center">
                        <select
                          className="form-select mb-4"
                          onChange={(e) => setShowUser(e.target.value)}
                          value={showUser}
                        >
                          <option selected>
                            <Translate text={"Select Students"} type={trans} />
                          </option>
                          {users?.map((i) => (
                            <>
                              <option value={i?.email}>{i?.name}</option>
                            </>
                          ))}
                        </select>
                      </div>
                    </>
                  ) : (
                    <p className="form_assign_user_fontSize">
                      {subIndex?.[subQuiz].showUsers?.map((i) => (
                        <p className="p-2 bg-secondary text-white form_selected_user_fontSize">
                          {i?.name}
                        </p>
                      ))}
                    </p>
                  )}
                </div>
              </div>
              {!submitted && (
                <div className="form_assign text-center mx-2">
                  <label className="form-label form_assign_title">
                    <Translate text={"Select Users"} type={trans} />
                  </label>
                  <select
                    className="form-select mb-4"
                    onChange={(e) => {
                      setStudents([
                        ...students,
                        {
                          ...users.find((i) => i._id == e.target.value),
                          isSubmitted: false,
                        },
                      ]);
                    }}
                  >
                    <option selected>
                      <Translate text={"Add Students"} type={trans} />
                    </option>
                    {users?.map((i) => (
                      <>
                        <option value={i?._id}>{i?.name}</option>
                      </>
                    ))}
                  </select>
                  <div className="d-flex">
                    {students.map((i) => (
                      <p className="p-2 bg-secondary text-white form_selected_user_fontSize">
                        {i?.name}{" "}
                        <span
                          className="ms-2"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            setStudents(students.filter((t) => t?._id != i._id))
                          }
                        >
                          <BsX />
                        </span>
                      </p>
                    ))}
                  </div>
                  <button
                    className="form_question_add_btn w-100"
                    onClick={assignUser}
                  >
                    <Translate text={"Add Users"} type={trans} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const uiAnswerQuizData = (type, i) => {
  console.log(type);
  switch (type) {
    case 0:
      return (
        <>
          <div className="col-md-3">
            <input
              type="radio"
              checked={i.ans == "answer1"}
              className="mx-2 form-check-input"
            />

            <span className="form_question_ans_fontSize">{i.answer1}</span>
          </div>
          <div className="col-md-3">
            <input
              type="radio"
              checked={i.ans == "answer2"}
              className="mx-2 form-check-input"
            />
            <span className="form_question_ans_fontSize">{i.answer2}</span>
          </div>
          <div className="col-md-3">
            <input
              type="radio"
              checked={i.ans == "answer3"}
              className="mx-2 form-check-input"
            />

            <span className="form_question_ans_fontSize">{i.answer3}</span>
          </div>
          <div className="col-md-3">
            <input
              type="radio"
              checked={i.ans == "answer4"}
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
              disabled
              checked={i.ans.find((j) => j == "answer1")}
              className="mx-2 form-check-input"
            />

            <span className="form_question_ans_fontSize">{i.answer1}</span>
          </div>
          <div className="col-md-3">
            <input
              type="checkbox"
              disabled
              checked={i.ans.find((j) => j == "answer2")}
              className="mx-2 form-check-input"
            />
            <span className="form_question_ans_fontSize">{i.answer2}</span>
          </div>
          <div className="col-md-3">
            <input
              type="checkbox"
              disabled
              checked={i.ans.find((j) => j == "answer3")}
              className="mx-2 form-check-input"
            />

            <span className="form_question_ans_fontSize">{i.answer3}</span>
          </div>
          <div className="col-md-3">
            <input
              type="checkbox"
              disabled
              checked={i.ans.find((j) => j == "answer4")}
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
              disabled
              value={i.ans}
              className="mx-2 form-control"
              placeholder="Answer"
            />
          </span>
        </div>
      );
  }
};

export default QuizCom;
