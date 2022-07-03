import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const FormComment = ({ blog_id, type, reply, setReply }) => {
  const { realTime, user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [commentData, setCommentData] = useState("");
  const [siteUser, setSiteUser] = useState({});
  useEffect(() => {
    fetch(`https://cryptic-temple-44121.herokuapp.com/users/account/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSiteUser(data);
      });
  }, []);
  const handleSubmit = async () => {
    setLoading(true);
    if (type === "Submit") {
      fetch("https://cryptic-temple-44121.herokuapp.com/watch/comment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: user.email,
            avatar: siteUser.photo,
            name: siteUser.name,
          },
          content: commentData,
          blog_id: blog_id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
        });
      setCommentData("");
      setLoading(false);
    }
    if (type === "Reply") {
      setCommentData("");
      setReply(null);
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="pb-4 px-4">
        <label htmlFor="comment" className="form-label py-3 h3 fw-bold">
          {type === "Reply" ? "Reply" : "Discussion"}
        </label>
        <div className="row">
          <div className="col-md-9">
            <textarea
              disabled={realTime.connected !== true}
              className="form-control"
              id="comment"
              rows={4}
              onChange={(e) => setCommentData(e.target.value)}
              value={commentData}
              placeholder={realTime.connected !== true ? "...Connected..." : ""}
            />
          </div>
          <div className="col-md-3">
            {loading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <button
                className="border-0 primaryBgColor text-white px-4 py-2"
                onClick={handleSubmit}
              >
                {type}
              </button>
            )}
            {type === "Reply" && (
              <button
                className="btn mx-2 btn-sm bg-color rounded-pill px-4"
                onClick={() => setReply(null)}
              >
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComment;
