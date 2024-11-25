import React, { useState } from 'react';
import VerificationForm from './VerificationForm';
import RegisterForm from './RegisterForm';
const Register = ({ setStep }) => {
  const [verificationFormVisible, setVerificationFormVisible] = useState(false);
  return (
    <div className="register-container">
      {!verificationFormVisible ? (
        <RegisterForm
          setVerificationFormVisible={setVerificationFormVisible}
          setStep={setStep}
        />
      ) : (
        <VerificationForm />
      )}
    </div>
  );
};

export default Register;
