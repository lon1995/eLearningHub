import initializeAuth from "../Firebase/Firebase.init";
import { useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  updatePassword,
  signInWithEmailLink,
  isSignInWithEmailLink,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import io from "socket.io-client";
import Swal from "sweetalert2";

initializeAuth();
const useHooks = () => {
  const [trans, setTrans] = useState("en");
  const [load, setLoad] = useState(true)
  const handleTransLate = (data) => {
    localStorage.setItem("translation", JSON.stringify(data));
    setTrans(data);
    window.location = "/";
  };

  useEffect(() => {
    const lang = JSON.parse(localStorage.getItem("translation"))
    if (lang) {
      setTrans(lang);
    }
  }, []);

  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [forgetEmail, setForgetEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [realTime, setRealTime] = useState(null);
  const [instructor, setInstructor] = useState({});
  const [admin, setAdmin] = useState({});

  const auth = getAuth();

  useEffect(() => {
    const socket = io("https://cryptic-temple-44121.herokuapp.com/");
    setRealTime(socket);
    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    fetch(
      `https://cryptic-temple-44121.herokuapp.com/users/account?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setInstructor(data[0]?.isInstructor));
  }, [user.email]);

  useEffect(() => {
    fetch(
      `https://cryptic-temple-44121.herokuapp.com/users/account?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setAdmin(data[0]?.isAdmin));
  }, [user.email]);

  const loginUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const actionCodeSettings = {
    url: "https://elearning-hub-lon1995.web.app/confirmed-email",
    handleCodeInApp: true,
  };

  const AuthEmailSend = (email) => {
    setIsLoading(true);
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const AuthEmailLogin = () => {
    setIsLoading(true);
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          setUser(result.user);
          window.localStorage.removeItem("emailForSignIn");
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
    }
  };

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLogged(true);
      } else {
        setUser({});
        setIsLogged(false);
      }
      setIsLoading(false);
    });
    return () => unSub;
  }, []);

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };
  const UpdatePass = () => {
    setIsLoading(true);
    const user = auth.currentUser;
    const newPassword = password;
    updatePassword(user, newPassword)
      .then(() => {
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "Password Updated Successfully",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const ForgetPassword = () => {
    setIsLoading(true);
    sendPasswordResetEmail(auth, forgetEmail)
      .then(() => {
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "Check Your Email",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    admin,
    instructor,
    logout,
    error,
    AuthEmailSend,
    UpdatePass,
    setPassword,
    AuthEmailLogin,
    loginUser,
    ForgetPassword,
    setForgetEmail,
    realTime,
    isLoading,
    isLogged,
    handleTransLate,
    setTrans,
    trans,
    setLoad,
    load
  };
};

export default useHooks;
