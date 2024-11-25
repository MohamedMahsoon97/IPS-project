import React from 'react'
import SuccessfulIcon from '../assets/svg/SuccessfulIcon'

const SuccessComponent = () => {
  return (
    <div>
      <span>
        <SuccessfulIcon />
      </span>
      <h3>تم التسجيل بنجاح</h3>
      <a href="/">Return to Homepage</a>
    </div>
  );
}

export default SuccessComponent