import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import ProtectedRoute from './ProtectedRoute';
import MainLayout from '../layouts/MainLayout';
import NotFound from '../pages/NotFound';
import routesConfig from '../routesConfig';

const AppRoutes = ({ isAuthenticated }) => (
  <Routes element={<MainLayout />}>
    {routesConfig.map(({ path, element, protected: isProtected }) =>
      isProtected ? (
        <Route
          key={path}
          element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path={path} element={element} />
        </Route>
      ) : (
        <Route key={path} path={path} element={element} />
      )
    )}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
