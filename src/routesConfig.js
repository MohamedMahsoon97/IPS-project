import { useSelector } from 'react-redux';
import Home from './pages/Home';
import LoginSystem from './pages/Login/LoginSystem';
import MainLayout from './layouts/MainLayout';
import FineInformation from './components/FineInformation';

const routesConfig = [
  { path: '/', element: <Home />, protected: true },
  {
    path: '/traffic-violation',
    element: <MainLayout />,
    protected: true,
  },
  {
    path: '/fine-information',
    element: <FineInformation />,
    protected: true,
  },
  { path: '/login', element: <LoginSystem />, protected: false },
];

export default routesConfig;
