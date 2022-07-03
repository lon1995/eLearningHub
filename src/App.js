import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Contact from "./Pages/Contact";
import CourseDetails from "./Pages/CourseDetails";
import CourseList from "./Pages/CourseList";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Welcome from "./Components/Backend/Welcome";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import Account from "./Components/Backend/Account";
import EnrolledCourse from "./Components/Backend/Student/EnrolledCourse";
import AddCourse from "./Components/Backend/Instructor/AddCourse";
import WatchCourse from "./Components/Backend/Student/WatchCourse";
import UpdateCourse from "./Components/Backend/Instructor/UpdateCourse";
import Instructor from "./Pages/Instructor";
import Faq from "./Pages/FAQ";
import InstructorRegister from "./Pages/InstructorRegister";
import StudentRegister from "./Pages/StudentRegister";
import MyCourse from "./Components/Backend/Instructor/MyCourse";
import AddStudent from "./Components/Backend/AddStudent";
import AddInstructor from "./Components/Backend/Admin/AddInstructor";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminWelcome from "./Components/Backend/Admin/Welcome";
import TotalStudent from "./Components/Backend/Admin/TotalStudent";
import AddAdmin from "./Components/Backend/Admin/AddAdmin";
import TotalInstructor from "./Components/Backend/Admin/TotalInstructor";
import TotalCourse from "./Components/Backend/Admin/TotalCourse";
import AuthProvider from "./ContextAPI/AuthProvider";
import Password from "./Pages/Password";
import ConfirmedEmail from "./Pages/ConfirmedEmail";
import ForgetPassword from "./Pages/ForgetPassword";
import PrivateOutlet from "./Routes/PrivateOutlet";
import AddCategory from "./Components/Backend/Admin/AddCategory";
import Logged from "./Routes/Logged";
import Quiz from "./Components/Backend/Quiz";
import AllQuiz from "./Components/Backend/AllQuiz";
import InstructorQuiz from "./Components/Backend/Instructor/InstructorQuiz";
import AttendQuiz from "./Components/Backend/Student/AttendQuiz";
import { useEffect, useState } from "react";
import { postData } from "./api/api";
import AddForm from "./Pages/AddForm";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="courseList" element={<CourseList />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route
            path="login"
            element={
              <Logged>
                <Login />
              </Logged>
            }
          />
          <Route path="register" element={<Register />} />
          <Route path="instructorRegister" element={<InstructorRegister />} />
          <Route path="studentRegister" element={<StudentRegister />} />
          <Route path="faq" element={<Faq />} />
          <Route path="instructor" element={<Instructor />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="password" element={<Password />} />
          <Route path="confirmed-email" element={<ConfirmedEmail />} />
          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="watch/:id" element={<WatchCourse />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Welcome />} />
              <Route path="addStudent" element={<AddStudent />} />
              <Route path="addInstructor" element={<AddInstructor />} />
              <Route path="account" element={<Account />} />
              <Route path="enrolledCourse" element={<EnrolledCourse />} />
              <Route path="myCourse" element={<MyCourse />} />
              <Route path="addCourse" element={<AddCourse />} />
              <Route path="updateCourse" element={<UpdateCourse />} />
              <Route path="quiz" element={<InstructorQuiz />} />
              <Route path="attendQuiz" element={<AttendQuiz />} />
              <Route path="addForm" element={<AddForm />} />
            </Route>
            <Route path="adminDashboard" element={<AdminDashboard />}>
              <Route index element={<AdminWelcome />} />
              <Route path="addAdmin" element={<AddAdmin />} />
              <Route path="addCategory" element={<AddCategory />} />
              <Route path="addInstructor" element={<AddInstructor />} />
              <Route path="addStudent" element={<AddStudent />} />
              <Route path="addCourse" element={<AddCourse />} />
              <Route path="totalCourse" element={<TotalCourse />} />
              <Route path="totalStudent" element={<TotalStudent />} />
              <Route path="totalInstructor" element={<TotalInstructor />} />
              <Route path="account" element={<Account />} />
              <Route path="addQuiz" element={<Quiz />} />
              <Route path="allQuiz" element={<AllQuiz />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
