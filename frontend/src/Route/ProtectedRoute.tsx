import React from "react";
import { Navigate, useLocation } from "react-router";
import { UseAuth } from "../Context/UserAuth";

type Props = { children: React.ReactNode };

const ProtectedRoute: React.FC<Props> = ({ children }: Props) => {
  const location = useLocation();
  const { isLoggedIn } = UseAuth();
  return isLoggedIn() ? (
    <>{children}</>
  ) : (
    <>
      <Navigate to="/login" state={{ from: location }} replace />
    </>
  );
};

export default ProtectedRoute;
