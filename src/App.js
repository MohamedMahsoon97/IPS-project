import { useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
  const isAuthenticated = true; //useSelector((state) => state.auth.isAuthenticated);
  return (
    <BrowserRouter>
      <div className="ISP-App">
        <AppRoutes isAuthenticated={isAuthenticated} />
      </div>
    </BrowserRouter>
  );
};

export default App;
