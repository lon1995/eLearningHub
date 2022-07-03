import { useContext } from "react";
import { AuthContext } from "../ContextAPI/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
export default useAuth;
