import React, { useRef } from "react";
import Footer from "../Components/Frontend/Footer";
import NavBar from "../Components/Frontend/NavBar";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import Translate from "../Components/Translate";
import useAuth from "../Hooks/useAuth";

const Contact = () => {
  const form = useRef();
  const { trans } = useAuth();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z1zlo4z",
        "template_ylao85l",
        form.current,
        "3NYoRQHKBkDL7-aCy"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Email Send Successfully",
            showConfirmButton: false,
            timer: 2500,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <NavBar />
      <div className="courseBreadcrumb">
        <div className="container py-5 text-secondary">
          <span>
            <Translate text="Home &gt; Contact " type={trans} />
          </span>
        </div>
      </div>
      <div className="container py-5">
        <div className="row py-5 align-items-center">
          <div className="col-md-6">
            <div className="about-img">
              <img
                className="rounded-3 w-100"
                src={
                  "https://www.seekpng.com/png/full/10-103122_world-map-designs-png-world-map-web-design.png"
                }
                alt="Contact"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="aboutInfo">
              <h1 className="fw-bolder">
                <Translate text="Our Branches" type={trans} />
              </h1>
              <p>
                <Translate
                  text="We want to inspire and multiply the
                kind of creative exploration that furthers expression, learning
                and application."
                  type={trans}
                />
              </p>
              <div className="d-flex align-items-center py-2">
                <div className="contactIcon contactIcon1">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5837 11.3261C20.5837 17.1859 13.0003 22.2087 13.0003 22.2087C13.0003 22.2087 5.41699 17.1859 5.41699 11.3261C5.41699 9.32792 6.21595 7.41159 7.6381 5.99868C9.06025 4.58576 10.9891 3.79199 13.0003 3.79199C15.0116 3.79199 16.9404 4.58576 18.3626 5.99868C19.7847 7.41159 20.5837 9.32792 20.5837 11.3261Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M13.0004 13.8372C14.3965 13.8372 15.5282 12.7128 15.5282 11.3258C15.5282 9.93883 14.3965 8.81445 13.0004 8.81445C11.6044 8.81445 10.4727 9.93883 10.4727 11.3258C10.4727 12.7128 11.6044 13.8372 13.0004 13.8372Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <span className="text-secondary fs-5">Romania</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact py-5">
        <div className="container py-4">
          <h1 className="fw-bolder text-center py-2">
            <Translate text="Get In Touch" type={trans} />
          </h1>
          <div className="row py-4">
            <div className="col-md-5">
              <div className="contactInfo  pb-3">
                <div className="contactInfoBox bg-white rounded p-4 d-flex justify-content-center align-items-center">
                  <div className="contactIcon contactIcon1">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clipOne)">
                        <path
                          d="M1.33325 8.00033V29.3337L10.6666 24.0003L21.3333 29.3337L30.6666 24.0003V2.66699L21.3333 8.00033L10.6666 2.66699L1.33325 8.00033Z"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M10.6667 2.66699V24.0003"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M21.3333 8V29.3333"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath>
                          <rect width="32" height="32" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="contactInfo w-75">
                    <span className="d-block fs-6 text-secondary fw-bold">
                      <Translate text="ADDRESS" type={trans} />
                    </span>
                    <span className="d-block fs-5">Romania</span>
                  </div>
                </div>
              </div>
              <div className="contactInfo py-3">
                <div className="contactInfoBox bg-white rounded p-4 d-flex justify-content-center align-items-center">
                  <div className="contactIcon contactIcon2">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.06115 4.57129H27.2652C28.7918 4.57129 30.0407 5.857 30.0407 7.42843V24.5713C30.0407 26.1427 28.7918 27.4284 27.2652 27.4284H5.06115C3.53462 27.4284 2.28564 26.1427 2.28564 24.5713V7.42843C2.28564 5.857 3.53462 4.57129 5.06115 4.57129Z"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M30.0407 7.42773L16.1632 17.4277L2.28564 7.42773"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="contactInfo w-75">
                    <span className="d-block fs-6 text-secondary fw-bold">
                      <Translate text="EMAIL" type={trans} />
                    </span>
                    <span className="d-block fs-6">
                      elearning-hub-boboc1998@gmail.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="contactInfo py-3">
                <div className="contactInfoBox bg-white rounded p-4 d-flex justify-content-center align-items-center">
                  <div className="contactIcon contactIcon3">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.7992 22.3667V26.2205C28.8006 26.5783 28.7272 26.9324 28.5836 27.2602C28.44 27.588 28.2293 27.8823 27.9652 28.1242C27.701 28.366 27.3892 28.5502 27.0496 28.6648C26.71 28.7794 26.3502 28.822 25.9931 28.7898C22.0323 28.3602 18.2277 27.0095 14.8849 24.846C11.7749 22.8737 9.13821 20.2422 7.16198 17.1383C4.98665 13.7871 3.6329 9.9715 3.2104 6.00077C3.17823 5.64553 3.22053 5.2875 3.33461 4.94948C3.44869 4.61145 3.63204 4.30083 3.87299 4.0374C4.11394 3.77397 4.40721 3.56349 4.73413 3.41937C5.06105 3.27526 5.41446 3.20066 5.77185 3.20032H9.63333C10.258 3.19418 10.8636 3.41495 11.3372 3.82147C11.8109 4.22799 12.1202 4.79253 12.2077 5.40985C12.3706 6.64316 12.6729 7.85411 13.1087 9.01961C13.2818 9.4794 13.3193 9.9791 13.2167 10.4595C13.114 10.9399 12.8755 11.3809 12.5294 11.7301L10.8947 13.3616C12.7271 16.5777 15.3952 19.2405 18.6177 21.0693L20.2524 19.4378C20.6024 19.0924 21.0442 18.8544 21.5256 18.7519C22.0069 18.6495 22.5076 18.6869 22.9683 18.8597C24.1361 19.2946 25.3495 19.5963 26.5852 19.759C27.2105 19.847 27.7815 20.1613 28.1897 20.6421C28.5979 21.1229 28.8148 21.7367 28.7992 22.3667Z"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="contactInfo w-75">
                    <span className="d-block fs-6 text-secondary fw-bold">
                      <Translate text="PHONE" type={trans} />
                    </span>
                    <span className="d-block fs-5">+39 0000000000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="contactForm rounded py-3 bg-white p-4">
                <form ref={form} onSubmit={sendEmail} className="">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="fName" className="form-label fw-bold">
                          <Translate text="First Name" type={trans} />
                        </label>
                        <input
                          name="from_name"
                          type="text"
                          className="form-control"
                          id="fName"
                          placeholder="First name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="fName" className="form-label fw-bold">
                          <Translate text="Email" type={trans} />
                        </label>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          id="fName"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label fw-bold">
                        <Translate text="Subject" type={trans} />
                      </label>
                      <input
                        name="user_subject"
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Messages" className="form-label fw-bold">
                      <Translate text="Messages" type={trans} />
                    </label>
                    <textarea
                      name="message"
                      className="form-control"
                      id="Messages"
                      rows="3"
                      placeholder="Type Here"
                    ></textarea>
                  </div>
                  <div className="text-end">
                    <input
                      type="submit"
                      value="Send Messages"
                      className="border-0 primaryBgColor d-inline-block my-3 px-4 py-3 text-white rounded text-uppercase"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
