import React from "react";
import { useAuth } from "../hook/AuthContext";
import { Navigate, Route } from "react-router-dom";

interface PrivateRouteProps {
  path: string;
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
