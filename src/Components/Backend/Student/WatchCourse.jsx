import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Frontend/Footer";
import NavBar from "../../Frontend/NavBar";
import Comment from "../Comment/Comment";
import ReactPlayer from "react-player";
import useAuth from "../../../Hooks/useAuth";
import Translate from "./../../Translate";
const WatchCourse = () => {
  const { user, trans } = useAuth();
  const { id } = useParams();
  const [courseWatch, setCourseWatch] = useState({});
  const [playList, setPlayList] = useState({ addFileDataLink: "" });
  const [playListTitle, setPlayListTitle] = useState([]);

  useEffect(() => {
    setPlayList(courseWatch?.files?.find((i) => i?.addFileDataLink) || "");
  }, [courseWatch]);

  useEffect(() => {
    fetch(`https://cryptic-temple-44121.herokuapp.com/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourseWatch(data));
  }, []);

  function get_url_extension(url) {
    return url?.split(/[#?]/)[0]?.split(".").pop().trim();
  }

  return (
    <>
      <NavBar />
      <div className="secondaryBgColor">
        <div className="container py-4">
          <div className="my-5">
            <div className="d-flex justify-content-between align-items-center">
              <div className="rounded-circle bg-white d-inline-block p-3">
                <Link to="/dashboard/enrolledCourse" className="text-black">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 19.5L8.5 12.5L15.5 5.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-md-8">
                <div className="courseVide  rounded  bg-white">
                  {get_url_extension(playList?.addFileDataLink) ==
                    ("mp4" || "flv") && (
                    <div className="player-wrapper">
                      <ReactPlayer
                        width="100%"
                        height="100%"
                        url={playList?.addFileDataLink}
                        playing
                        controls
                      />
                    </div>
                  )}
                  {get_url_extension(playList?.addFileDataLink) ==
                    ("jpg" || "png") && (
                    <img
                      className="rounded w-100"
                      src={playList?.addFileDataLink}
                      alt="IMG"
                    />
                  )}

                  {get_url_extension(playList?.addFileDataLink) == "pdf" && (
                    <div>
                      <embed
                        src={playList?.addFileDataLink}
                        width="100%"
                        height="700px"
                      />
                    </div>
                  )}

                  <div className="h5 fw-bold px-4 py-3">
                    {" "}
                    <Translate text={playListTitle} type={trans} />
                    
                  </div>
                </div>
                <div>
                  <Comment
                    blog_id={courseWatch?._id}
                    blog_user_id={courseWatch?.user}
                  />
                </div>
              </div>
              <div className="col-md-4 bg-white p-4 rounded h-100">
                <div className="h5">Course Contents</div>
                <hr />
                {courseWatch?.files?.map((file, index) => (
                  <div key={index} className="row align-items-center py-2 my-2">
                    {get_url_extension(file?.addFileDataLink) ==
                      ("pdf" || "png" || "jpg") && (
                      <div className="col-md-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-file"
                        >
                          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                          <polyline points="13 2 13 9 20 9"></polyline>
                        </svg>
                      </div>
                    )}
                    {get_url_extension(file?.addFileDataLink) ==
                      ("mp4" || "flv") && (
                      <div className="col-md-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-play-circle"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polygon points="10 8 16 12 10 16 10 8"></polygon>
                        </svg>
                      </div>
                    )}
                    {get_url_extension(file?.addFileDataLink) ==
                      ("jpg" || "png") && (
                      <div className="col-md-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-file"
                        >
                          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                          <polyline points="13 2 13 9 20 9"></polyline>
                        </svg>
                      </div>
                    )}

                    <div className="col-md-7 pointer">
                      <div
                        className="text-black"
                        onClick={() => {
                          setPlayList({
                            addFileDataLink: file?.addFileDataLink,
                          });
                          setPlayListTitle(file?.addTitle);
                        }}
                      >
                        <Translate text={file?.addTitle} type={trans} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="text-black">
                        {get_url_extension(file?.addFileDataLink) ==
                          ("mp4" || "flv") &&
                          Math.floor(file.duration / 60) +
                            ":" +
                            (file.duration % 60 ? file.duration % 60 : "00")}

                        {get_url_extension(file?.addFileDataLink) ==
                          ("jpg" || "png") && (
                          <a
                            target="_blank"
                            href={file?.addFileDataLink}
                            download
                          >
                            <Translate text={"Download"} type={trans} />
                          </a>
                        )}
                        {get_url_extension(file?.addFileDataLink) == "pdf" && (
                          <>
                            <a
                              target="_blank"
                              href={file?.addFileDataLink}
                              download
                            >
                              <Translate text={"Download"} type={trans} />
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WatchCourse;
