import { Formik } from 'formik';
import React, { useState } from 'react';
import OTPInput, { ResendOTP } from 'otp-input-react';
import { Button, Grid } from '@mui/material';
import VerificationIcon from '../../assets/svg/VerificationIcon';
const VerificationForm = () => {
  const [OTP, setOTP] = useState('');
  const renderButton = (buttonProps) => {
    return (
      <Button {...buttonProps} className="resend-otp-btn">
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0001 22.75C6.80008 22.75 2.58008 18.52 2.58008 13.33C2.58008 8.13999 6.80008 3.89999 12.0001 3.89999C13.0701 3.89999 14.1101 4.04999 15.1101 4.35999C15.5101 4.47999 15.7301 4.89999 15.6101 5.29999C15.4901 5.69999 15.0701 5.91999 14.6701 5.79999C13.8201 5.53999 12.9201 5.39999 12.0001 5.39999C7.63008 5.39999 4.08008 8.94999 4.08008 13.32C4.08008 17.69 7.63008 21.24 12.0001 21.24C16.3701 21.24 19.9201 17.69 19.9201 13.32C19.9201 11.74 19.4601 10.22 18.5901 8.91999C18.3601 8.57999 18.4501 8.10999 18.8001 7.87999C19.1401 7.64999 19.6101 7.73999 19.8401 8.08999C20.8801 9.63999 21.4301 11.45 21.4301 13.33C21.4201 18.52 17.2001 22.75 12.0001 22.75Z"
            fill="#292D32"
          />
          <path
            d="M16.1304 6.06999C15.9204 6.06999 15.7104 5.97999 15.5604 5.80999L12.6704 2.49C12.4004 2.18 12.4304 1.69999 12.7404 1.42999C13.0504 1.15999 13.5304 1.18999 13.8004 1.49999L16.6904 4.82C16.9604 5.13 16.9304 5.60999 16.6204 5.87999C16.4904 6.00999 16.3104 6.06999 16.1304 6.06999Z"
            fill="#292D32"
          />
          <path
            d="M12.7602 8.53C12.5302 8.53 12.3002 8.42 12.1502 8.22C11.9102 7.89 11.9802 7.42 12.3102 7.17L15.6802 4.71C16.0102 4.46 16.4802 4.54 16.7302 4.87C16.9802 5.2 16.9002 5.67 16.5702 5.92L13.2002 8.39C13.0702 8.49 12.9202 8.53 12.7602 8.53Z"
            fill="#292D32"
          />
        </svg>
        <span>إعادة إرسال</span>
      </Button>
    );
  };
  const renderTime = (remainingTime) => {
    return;
  };
  return (
    <div>
      <Formik
        initialValues={{
          otp: OTP,
          submit: null,
        }}
        // validationSchema={validationSchema}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          //
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form
            className="verification-form"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="login-welcome" style={{ marginBottom: '20px' }}>
              <VerificationIcon />
              <h2>كود التأكيد</h2>
              <p>
                يرجى ادخال الكود المكون من اربعة ارقام المرسل ع الهاتف لاكمال
                عمليه التسجيل
              </p>
            </div>
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={4}
              otpType="number"
              disabled={false}
              className={'otp-container'}
              inputClassName="otp-input"
              isInputNum={true}
              renderInput={(props) => (
                <input {...props} type="number" placeholder="0" />
              )}
            />
            <ResendOTP
              className="otp-input-btn"
              renderButton={renderButton}
              renderTime={renderTime}
              //   onResendClick={() => handleReSendCode()}
            />

            <Grid
              container
              alignItems="center"
              justifyContent="center"
              mt={'20px'}
            >
              <>
                {OTP?.length === 4 ? (
                  <Button
                    className="verify-btn"
                    fullWidth
                    size="large"
                    type="submit"
                  >
                    تأكيد
                  </Button>
                ) : (
                  <Button
                    className="verify-btn"
                    color="secondary"
                    fullWidth
                    size="large"
                    variant="contained"
                    disabled
                  >
                    تأكيد
                  </Button>
                )}
              </>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default VerificationForm;
