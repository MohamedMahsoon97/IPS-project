import React, { useState } from 'react';
import IraqLogo from '../../assets/IraqLogo.png';
import TrafficLogo from '../../assets/TrafficLogo.png';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { Button, Grid, TextField } from '@mui/material';
import * as yup from 'yup';
import { inputStyleWithoutWidth } from '../../shared/styles';
import Login from './Login';
import Register from './Register';
const LoginSystem = () => {
  const [activeButton, setActiveButton] = useState('login'); // "login" or "register"

  const handleToggle = (button) => {
    setActiveButton(button);
  };
  const validationSchema = yup.object({
    email: yup.string().required('البريد الإلكترونى مطلوب'),
    phone: yup.string().required('رقم الجوال مطلوب'),
    password: yup.string().required('كلمة المرور مطلوبة'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      const data = {
        email: values.email,
        password: values.password,
      };

      const jsonData = JSON.stringify(data);
    },
  });
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={IraqLogo} alt="IraqLogo" width="60px" height="100px" />
        </div>
        <div className="title">رجــوع</div>
      </header>
      <main className="main-layout">
        <div className="login-button-group">
          <button
            className={`button ${activeButton === 'login' ? 'active' : ''}`}
            onClick={() => handleToggle('login')}
          >
            تسجيل الدخول
          </button>
          <button
            className={`button ${activeButton === 'register' ? 'active' : ''}`}
            onClick={() => handleToggle('register')}
          >
            تسجيل جديد
          </button>
        </div>
        {activeButton === 'login' ? (
          <Login />
        ) : activeButton === 'register' ? (
          <Register />
        ) : (
          <div>
            <div className="login-welcome">
              <img
                src={TrafficLogo}
                alt="IraqLogo"
                width="120px"
                height="120px"
              />
              <h2>كود التأكيد</h2>
              <p>
                يرجى ادخال الكود المكون من اربعة ارقام المرسل ع الهاتف لاكمال
                عمليه التسجيل
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default LoginSystem;
