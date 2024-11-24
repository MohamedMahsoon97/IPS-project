import { useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="ISP-App">
        <AppRoutes isAuthenticated={isAuthenticated} />
      </div>
    </BrowserRouter>
  );
};

export default App;
