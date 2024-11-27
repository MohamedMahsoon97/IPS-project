import { useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
  const isAuthenticated = true; //useSelector((state) => state.auth.isAuthenticated);
  return (
    <BrowserRouter>
      <div className="ISP-App">
        <div className="ISP-App-container">
          <AppRoutes isAuthenticated={isAuthenticated} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
