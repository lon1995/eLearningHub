import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import Footer from "../Components/Frontend/Footer";
import NavBar from "../Components/Frontend/NavBar";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import Translate from "../Components/Translate";
const Checkout = () => {
  const { user, trans } = useAuth();
  const { emptyCart, isEmpty, cartTotal, items } = useCart();
  const [accountInfo, setAccountInfo] = useState({});
  const navigate = useNavigate();
  const handleInput = (e) => {
    let input = { [e.target.name]: e.target.value };
    setAccountInfo({ ...accountInfo, ...input });
  };
  const purchasedItems = JSON.parse(
    localStorage.getItem("react-use-cart") || ""
  );
  const allData = { accountInfo, purchasedItems, email: user.email };
  const OrderPlace = () => {
    fetch("https://cryptic-temple-44121.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Purchased",
            text: "Course Added!",
            // footer: '<a href="">Why do I have this issue?</a>'
          });
          emptyCart();
          navigate("/dashboard/enrolledCourse");
        }
      });
  };

  return (
    <div>
      <NavBar />
      <div className="courseBreadcrumb">
        <div className="container py-5 text-secondary">
          <span>
            <Translate text="Home &gt; Checkout " type={trans} />
          </span>
        </div>
      </div>
      <div className="secondaryBgColor py-5">
        <div className="container">
          {isEmpty ? (
            <h1>
              <Translate text="Your cart is empty" type={trans} />
            </h1>
          ) : (
            <div className="row">
              <div className="col-md-6">
                <div className="checkoutForm">
                  <div className="h5 fw-bold py-2">
                    <Translate text="Checkout" type={trans} />
                  </div>
                  <div className="bg-white p-4 rounded">
                    <div>
                      <div className="row">
                        <div className="col-md-12 text-center py-3 border-bottom border-primary border-3">
                          <svg
                            width="45"
                            height="34"
                            viewBox="0 0 45 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M39.5 2H5.75C3.67893 2 2 3.67893 2 5.75V28.25C2 30.3211 3.67893 32 5.75 32H39.5C41.5711 32 43.25 30.3211 43.25 28.25V5.75C43.25 3.67893 41.5711 2 39.5 2Z"
                              stroke="#25252E"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M2 13.25H43.25"
                              stroke="#25252E"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <div className="h6 py-2">
                            <Translate text="Debit Card" type={trans} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="my-4 input-group-lg">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              <Translate text="Name on Card" type={trans} />
                            </label>
                            <input
                              onChange={(e) => handleInput(e)}
                              name="name"
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="Type Here"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="my-4 input-group-lg">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              <Translate text="Card Number" type={trans} />
                            </label>
                            <input
                              onChange={(e) => handleInput(e)}
                              name="number"
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="Type Here"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="my-4 input-group-lg">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              <Translate
                                text="Expiration Date (MM/YY)"
                                type={trans}
                              />
                            </label>
                            <input
                              onChange={(e) => handleInput(e)}
                              name="date"
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="Type Here"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="my-4 input-group-lg">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              <Translate text="CVC" type={trans} />
                            </label>
                            <input
                              onChange={(e) => handleInput(e)}
                              name="cvc"
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="Type Here"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={OrderPlace}
                        className="primaryBgColor mt-4 mb-2 d-block px-4 py-3 text-white text-center fw-bolder rounded text-uppercase"
                      >
                        <Translate text="Confirm Payment" type={trans} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="checkoutForm">
                  <div className="h5 fw-bold py-2">
                    <Translate text="Summary" type={trans} />
                  </div>
                  <div className="bg-white p-4 rounded">
                    <div>
                      {items.map((i, index) => (
                        <div key={index} className="d-flex py-2">
                          <img src={i?.preview} alt="" className="w-25" />
                          <div className="px-2">
                            <div className="h5">
                              <Translate text={i?.name} type={trans} />
                            </div>
                            <div className="text-secondary">
                              by {i?.instructorName}
                            </div>
                            <div>€{i.price}</div>
                          </div>
                        </div>
                      ))}

                      <div className="d-flex align-items-center justify-content-between text-secondary pt-5 pb-4">
                        <span>
                          <Translate text="Subtotal" type={trans} />
                        </span>
                        <span>€{cartTotal}</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between fs-5 fw-bold">
                        <span>
                          <Translate text="Total" type={trans} />
                        </span>
                        <span>€{cartTotal}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
