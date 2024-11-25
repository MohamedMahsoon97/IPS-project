import { useSelector } from 'react-redux';
import Home from './pages/Home';
import LoginSystem from './pages/Login/LoginSystem';


const routesConfig = [
  { path: '/', element: <Home />, protected: true },
  // {
  //   path: '/traffic-violation',
  //   element: <TrafficViolation />,
  //   protected: true,
  // },
  { path: '/login', element: <LoginSystem />, protected: false },
];

export default routesConfig;
