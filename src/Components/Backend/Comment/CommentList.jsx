import React, { useCallback, useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const CommentList = ({ blog_id, blog_user_id }) => {
  const { user, realTime } = useAuth();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reply, setReply] = useState(null);

  useEffect(() => {
    if (!realTime) return;
    realTime.on("createComment", (data) => {
      setComments([data, ...comments]);
    });
    return () => {
      realTime.off("createComment");
    };
  }, [comments, , realTime]);

  const get = useCallback(async () => {
    setLoading(true);
    fetch(`https://cryptic-temple-44121.herokuapp.com/watch/comment/${blog_id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      });
  }, [blog_id]);

  useEffect(() => {
    get();
  }, [get]);

  return (
    <>
      {comments?.map((cm, index) => (
        <div className="py-2 rounded" key={index}>
          <div className="d-flex">
            <p className="m-3 fw-bold px-3 py-1 bg-dark text-white rounded-pill">{cm.user.name}</p>
          </div>
          <p className="mx-5 text-muted bg-light p-3 rounded-pill">
            {cm.content}
          </p>
          {user._id && (
            <p onClick={() => setReply(cm)} style={{ cursor: "pointer" }}>
              <u className="color mx-5">Reply</u>
            </p>
          )}
        </div>
      ))}
    </>
  );
};

export default CommentList;
