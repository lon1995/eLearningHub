import React from "react";
import BecomeAnInstructor from "../Components/Frontend/BecomeAnInstructor";
import BrowseCategories from "../Components/Frontend/BrowseCategories";
import Footer from "../Components/Frontend/Footer";
import Header from "../Components/Frontend/Header";
import LearningSteps from "../Components/Frontend/LearningSteps";
import LearnWitheLearning from "../Components/Frontend/LearnWitheLearning";
import MeetInstructor from "../Components/Frontend/MeetInstructor";
import NavBar from "../Components/Frontend/NavBar";
import PopularCourses from "../Components/Frontend/PopularCourses";
import StudentsSays from "../Components/Frontend/StudentsSays";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <BrowseCategories />
      <PopularCourses />
      <LearnWitheLearning />
      <LearningSteps />
      <StudentsSays />
      <MeetInstructor />
      {/* <BecomeAnInstructor/> */}
      <Footer />
    </>
  );
};

export default Home;
