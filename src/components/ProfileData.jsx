import React from 'react';
import { Box, Typography, Grid, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import UploadImgIcon from '../assets/svg/UploadImgIcon';
import { inputStyleWithoutWidth } from '../shared/styles';
const ProfileData = () => {
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
    },
  });
  return (
    <Box sx={{ p: 0 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
        backgroundColor="#fff"
        borderRadius={3}
        padding={2}
      >
        <Box>
          <Typography component="span">الرئيسية / </Typography>
          <Typography component="span" color="text.secondary">
            المعلومات الشخصية
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          direction: 'rtl',
          padding: '40px',
        }}
        backgroundColor="#fff"
        display="flex"
        gap="20px"
        height="450px"
        borderRadius={3}
      >
        <Grid container>
          <Grid item xs={12} style={{ marginBottom: '30px' }}>
            <Typography variant="h4">المعلومات الشخصية</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            spacing={2}
            direction="column"
            width="100%"
            gap="30px"
          >
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
                      error={
                        formik?.touched?.email && Boolean(formik?.errors?.email)
                      }
                      helperText={
                        formik?.touched?.email && formik?.errors?.email
                      }
                      sx={inputStyleWithoutWidth}
                      // InputProps={{
                      //   startAdornment: (
                      //     <InputAdornment position="start">
                      //       {EmailIcon}
                      //     </InputAdornment>
                      //   ),
                      // }}
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
                      error={
                        formik?.touched?.phone && Boolean(formik?.errors?.phone)
                      }
                      helperText={
                        formik?.touched?.phone && formik?.errors?.phone
                      }
                      sx={inputStyleWithoutWidth}
                      // InputProps={{
                      //   startAdornment: (
                      //     <InputAdornment position="start">
                      //       {PhoneIcon}
                      //     </InputAdornment>
                      //   ),
                      // }}
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
                        formik?.touched?.password &&
                        Boolean(formik?.errors?.password)
                      }
                      helperText={
                        formik?.touched?.password && formik?.errors?.password
                      }
                      sx={inputStyleWithoutWidth}
                      type="password"
                      // InputProps={{
                      //   startAdornment: (
                      //     <InputAdornment position="start">{LockIcon}</InputAdornment>
                      //   ),
                      //   endAdornment: (
                      //     <InputAdornment position="end">
                      //         {EyeIcon}
                      //     </InputAdornment>
                      //   )
                      // }}
                    />
                  </Grid>
                </Grid>
                <Grid container xs={12} sm={6}>
                  <Grid item xs={12} sm={12}>
                    <div className="upload-image">
                      <Typography style={{ marginBottom: '10px' }}>
                        رخصة السيارة
                      </Typography>
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
                        <h4 style={{ marginBottom: '10px' }}>
                          صورة رخصة السيارة
                        </h4>
                        <span style={{ color: '#878787', fontSize: '14px' }}>
                          يدعم صيغ png / jpeg
                        </span>
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

                <Grid
                  item
                  xs={12}
                  display={'flex'}
                  alignItems={'flex-end'}
                  justifyContent={'flex-end'}
                >
                  <Button
                    className="login-btn"
                    variant="contained"
                    type="submit"
                    style={{ width: '150px' }}
                    // loading={isLoading}
                  >
                    حـفـظ
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfileData;
