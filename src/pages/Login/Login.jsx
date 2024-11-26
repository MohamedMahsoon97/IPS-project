import React, { useState } from 'react';
import TrafficLogo from '../../assets/TrafficLogo.png';
import { useFormik } from 'formik';
import { Button, Grid, InputAdornment, TextField } from '@mui/material';
import * as yup from 'yup';
import { inputStyleWithoutWidth } from '../../shared/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LockIcon from '../../assets/svg/LockIcon';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const validationSchema = yup.object({
    email: yup.string().required('البريد الإلكترونى مطلوب'),
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
      navigate('/', { replace: true });
      dispatch({ type: 'LOGIN', payload: jsonData, isAuthenticated : true });
      window.localStorage.setItem('isLogged', jsonData);
    },
  });

  return (
    <div className="login-form">
      <div className="login-welcome">
        <img src={TrafficLogo} alt="IraqLogo" width="120px" height="120px" />
        <h2>اهلا بعودتك</h2>
        <p>
          يرجى ادخال البريد الالكترونى او الهاتف الجوال او رقم السيارة وكلمة
          المرور
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              className="program_input"
              fullWidth
              id="email"
              name="email"
              // label="Program Name"
              placeholder="البريد الالكترونى أو الهاتف الجوال أو رقم السيارة"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik?.touched?.email && Boolean(formik?.errors?.email)}
              helperText={formik?.touched?.email && formik?.errors?.email}
              sx={inputStyleWithoutWidth}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              className="program_input"
              fullWidth
              id="password"
              name="password"
              placeholder="كلمة المرور"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik?.touched?.password && Boolean(formik?.errors?.password)
              }
              helperText={formik?.touched?.password && formik?.errors?.password}
              sx={inputStyleWithoutWidth}
              type="password"
              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position="start">{LockIcon}</InputAdornment>
              //   ),
              // }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <div className="password-recovery ">
              <a href="#">نسيت كلمة المرور</a>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            display={'flex'}
            alignItems={'flex-end'}
            justifyContent={'flex-end'}
          >
            <Button
              className="login-btn"
              fullWidth
              variant="contained"
              type="submit"
              // loading={isLoading}
            >
              دخــول
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
