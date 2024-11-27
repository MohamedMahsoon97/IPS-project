import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const isAuthenticated = true; //useSelector((state) => state.auth.isAuthenticated);
  return (
    <BrowserRouter>
      <div className="ISP-App-container">
        <AppRoutes isAuthenticated={isAuthenticated} />
      </div>
    </BrowserRouter>
  );
};

export default App;
