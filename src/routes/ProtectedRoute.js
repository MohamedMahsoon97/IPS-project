import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Add your authentication logic here
  const isAuthenticated = window.localStorage.getItem('isLogged');
  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} replace />;
};

export default ProtectedRoute;
