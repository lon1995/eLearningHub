import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./../Hooks/useAuth";

export default function PrivateOutlet() {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border  m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return user?.email ? <Outlet /> : <Navigate to="/login" />;
}
