import React from "react";
import Footer from "../Components/Frontend/Footer";
import NavBar from "../Components/Frontend/NavBar";

const NotFound = () => {
  return (
    <div>
      <NavBar />
      <div className="d-flex flex-column align-items-center justify-content-center h-100 my-5 py-4">
        <img
          src="https://media.istockphoto.com/vectors/ro/404-concept-de-pagin%C4%83-nu-a-fost-g%C4%83sit-pictograma-rezultat-al-c%C4%83ut%C4%83rii-id833475304?b=1&k=20&m=833475304&s=170667a&w=0&h=Soso-UYDslaUlRyRsbs9wKJe9TJLFls4KSdOPnh-Ens="
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
