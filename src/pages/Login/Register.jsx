import React, { useState } from 'react';
import VerificationForm from './VerificationForm';
import RegisterForm from './RegisterForm';
const Register = () => {
  const [verificationFormVisible, setVerificationFormVisible] = useState(false);
  return (
    <div className="register-container">
      {!verificationFormVisible ? (
        <RegisterForm setVerificationFormVisible={setVerificationFormVisible} />
      ) : (
        <VerificationForm />
      )}
    </div>
  );
};

export default Register;
