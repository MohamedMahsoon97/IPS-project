import { Button, Checkbox, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { inputStyleWithoutWidth } from '../../shared/styles';
import UploadImgIcon from '../../assets/svg/UploadImgIcon';
import TrafficLogo from '../../assets/TrafficLogo.png';
const RegisterForm = ({ setVerificationFormVisible }) => {
  const validationSchema = yup.object({
    email: yup.string().required('البريد الإلكترونى مطلوب'),
    phone: yup.string().required('رقم الجوال مطلوب'),
    password: yup.string().required('كلمة المرور مطلوبة'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      password: '',
      image: null,
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      const data = {
        email: values.email,
        password: values.password,
        image: values.image,
        phone: values.phone,
      };

      const jsonData = JSON.stringify(data);
      setVerificationFormVisible(true);
    },
  });
  return (
    <div className="register-form">
      <div className="login-welcome" style={{ marginBottom: '20px' }}>
        <img src={TrafficLogo} alt="IraqLogo" width="120px" height="120px" />
        <h2>مرحبا بك</h2>
        <p>يرجى ادخال بيانات التسجيل في المنصه</p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
          spacing={2}
        >
          <Grid container xs={12} sm={6} spacing={2}>
            <Grid item xs={12} sm={12} marginBottom={1}>
              <TextField
                className="program_input"
                fullWidth
                id="email"
                name="email"
                type="email"
                placeholder="البريد الالكترونى"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik?.touched?.email && Boolean(formik?.errors?.email)}
                helperText={formik?.touched?.email && formik?.errors?.email}
                sx={inputStyleWithoutWidth}
              />
            </Grid>
            <Grid item xs={12} sm={12} marginBottom={1}>
              <TextField
                className="program_input"
                fullWidth
                id="phone"
                name="phone"
                placeholder="رقم الجوال"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik?.touched?.phone && Boolean(formik?.errors?.phone)}
                helperText={formik?.touched?.phone && formik?.errors?.phone}
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
                helperText={
                  formik?.touched?.password && formik?.errors?.password
                }
                sx={inputStyleWithoutWidth}
                type="password"
              />
            </Grid>
          </Grid>
          <Grid container xs={12} sm={6}>
            <Grid item xs={12} sm={12}>
              <div className="upload-image">
                <label
                  htmlFor="image"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    backgroundColor: '#fff',
                    padding: '30px 20px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    border: '1px dotted #eee',
                  }}
                >
                  <UploadImgIcon />
                  <h4>صورة رخصة السيارة</h4>
                  <span>يدعم صيغ png / jpeg</span>
                </label>
                <input
                  style={{ display: 'none' }}
                  type="file"
                  id="image"
                  name="image"
                  onChange={(e) => {
                    formik.setFieldValue('image', e.target.files[0]);
                  }}
                />
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div className="password-recovery">
              <Checkbox
                name="check"
                onChange={formik.handleChange}
                onCheck={formik.handleChange}
              />
              أوافق علي <a href="#">الشروط والأحكام</a>
            </div>
          </Grid>
          <Grid
            item
            xs={6}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Button
              className="login-btn"
              fullWidth
              variant="contained"
              type="submit"
              // loading={isLoading}
            >
              تسجيل
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default RegisterForm;
