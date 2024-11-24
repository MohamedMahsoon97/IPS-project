import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import LoginSystem from './pages/Login/LoginSystem';
import TrafficViolation from './pages/TrafficViolation';

const routesConfig = [
  { path: '/', element: <Home />, protected: true },
  { path: '/dashboard', element: <Dashboard />, protected: true },
  {
    path: '/traffic-violation',
    element: <TrafficViolation />,
    protected: true,
  },
  { path: '/login', element: <LoginSystem />, protected: false },
];

export default routesConfig;
