import React from 'react';
import TrafficLogo from '../assets/TrafficLogo.png';
import IraqLogo from '../assets/IraqLogo.png';
import { Link } from 'react-router-dom';
import PreviousViolationsIcon from '../assets/svg/PreviousViolationsIcon';
import CurrentViolationsIcon from '../assets/svg/CurrentViolationsIcon';
const Home = () => {
  return (
    <div className="main-content">
      <div className="main-content-header">
        <div className="logo">
          <img src={IraqLogo} alt="IraqLogo" width="60px" height="100px" />
          <img src={TrafficLogo} alt="IraqLogo" width="80px" height="80px" />
        </div>
        <div className="title">أهلا بك</div>
      </div>
      <div>
        <div className="main-content-header-welcome">
          <img src={TrafficLogo} alt="IraqLogo" width="120px" height="120px" />
          <h2>أهلا وسهلا بك في قائمة الغرامات الخاصة بك</h2>
          <p>هنا يمكنك مشاهدة قائمة الغرامات الخاصة بالسيارات المسجلة بأسمك</p>
        </div>
        <div className="violations-section">
          <Link to="/traffic-violation">
            <div className="violation-container">
              <CurrentViolationsIcon />
              <h4>المخالفات الحالية</h4>
            </div>
          </Link>
          <Link to='/traffic-violation'>
            <div className="violation-container">
              <PreviousViolationsIcon />
              <h4>المخالفات السابقة</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
