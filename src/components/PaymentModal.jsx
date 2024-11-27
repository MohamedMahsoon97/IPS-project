import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Grid,
  Modal,
  Radio,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '../assets/svg/CloseIcon';

const PaymentModal = ({ open, setOpen }) => {
  const [tab, setTab] = useState(0);
  const [selectedValue, setSelectedValue] = useState('option3');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTabChange = (event, newValue) => setTab(newValue);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          {/* Close Button */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Box>

          {/* Header */}
          <Typography
            variant="h6"
            component="h2"
            textAlign="center"
            fontWeight="bold"
            mb={3}
          >
            اختر طريقة الدفع
          </Typography>

          {/* Tabs */}
          <Tabs
            value={tab}
            onChange={handleTabChange}
            centered
            sx={{
              mb: 3,
              '.css-stp9o6-MuiTabs-flexContainer': {
                gap: '10px',
              },
              '.MuiTab-root.Mui-selected': {
                backgroundColor: '#4A4244',
                color: '#fff',
                borderRadius: '10px',
                '&.Mui-selected': {
                  backgroundColor: '#4A4244',
                },
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#4A4244', // Customize indicator color
              },
              '& .MuiTab-root': {
                fontWeight: 'bold',
                fontSize: '16px',
                color: '#757575', // Default text color
                border: '1px solid #4A4244',
                borderRadius: '10px',
              },
              '.MuiTabs-indicator': {
                display: 'none',
              },
            }}
          >
            <Tab label="دفع كامل" />
            <Tab label="تقسيط" />
          </Tabs>

          {/* Payment Details */}
          <Box
            sx={{
              p: 2,
              mb: 3,
            }}
          >
            {!tab ? (
              <Grid
                container
                spacing={2}
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <Grid
                  item
                  xs={12}
                  marginBottom="20px"
                  display="flex"
                  alignItems="center"
                  gap="20px"
                >
                  <Typography style={{ color: '#716568' }}>
                    نوع الغرامة
                  </Typography>
                  :<Typography>وقوف خاص</Typography>
                </Grid>
                <Divider style={{ color: '#E4E4E4' }} flexItem />
                <Grid
                  item
                  xs={12}
                  marginBottom="20px"
                  display="flex"
                  alignItems="center"
                  gap="20px"
                >
                  <Typography style={{ color: '#716568' }}>
                    مكان الغرامة
                  </Typography>
                  :<Typography>حي الجزائر، شارع 60، البصرة، العراق.</Typography>
                </Grid>
                <Divider flexItem />
                <Grid
                  item
                  xs={12}
                  marginBottom="20px"
                  display="flex"
                  alignItems="center"
                  gap="20px"
                >
                  <Typography style={{ color: '#716568' }}>
                    تاريخ ووقت الغرامة
                  </Typography>
                  :
                  <Typography style={{ color: '#716568' }}>
                    19-10-2024 14:37
                  </Typography>
                </Grid>
                <Divider flexItem />
                <Grid
                  item
                  xs={12}
                  marginBottom="20px"
                  display="flex"
                  alignItems="center"
                  gap="20px"
                >
                  <Typography style={{ color: '#716568' }}>
                    قيمة الغرامة
                  </Typography>
                  :<Typography>500 دينار</Typography>
                </Grid>
              </Grid>
            ) : (
              <Grid
                container
                spacing={2}
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <Grid
                  item
                  xs={12}
                  marginBottom="20px"
                  display="flex"
                  alignItems="center"
                  gap="20px"
                >
                  <Typography style={{ color: '#716568' }}>
                    نوع الغرامة
                  </Typography>
                  :<Typography>وقوف خاص</Typography>
                </Grid>
                <Divider style={{ color: '#E4E4E4' }} flexItem />
                <Grid
                  item
                  xs={12}
                  marginBottom="20px"
                  display="flex"
                  alignItems="center"
                  gap="20px"
                >
                  <Typography style={{ color: '#716568' }}>
                    مكان الغرامة
                  </Typography>
                  :<Typography>حي الجزائر، شارع 60، البصرة، العراق.</Typography>
                </Grid>
                <Divider flexItem />
                <Grid
                  item
                  xs={12}
                  marginBottom="20px"
                  display="flex"
                  alignItems="center"
                  gap="20px"
                >
                  <Typography style={{ color: '#716568' }}>
                    تاريخ ووقت الغرامة
                  </Typography>
                  :
                  <Typography style={{ color: '#716568' }}>
                    19-10-2024 14:37
                  </Typography>
                </Grid>
                <Divider flexItem />
                <Grid
                  item
                  xs={12}
                  marginBottom="20px"
                  display="flex"
                  alignItems="center"
                  gap="20px"
                >
                  <Typography style={{ color: '#716568' }}>
                    قيمة الغرامة
                  </Typography>
                  :<Typography>500 دينار</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  marginBottom="20px"
                  display="flex"
                  gap="20px"
                >
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                        backgroundColor: '#f9f9f9',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        paddingRight: '10px',
                        paddingLeft: '10px',
                        borderRadius: 2,
                      }}
                    >
                      {[
                        { value: 'option1', label: '10 × 60 شهر' },
                        { value: 'option2', label: '5 × 110 شهر' },
                        { value: 'option3', label: '3 × 135 شهر' },
                      ].map((option) => (
                        <Box
                          key={option.value}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 1,
                            borderRadius: 2,
                            border: `2px solid ${
                              selectedValue === option.value
                                ? '#05bc05'
                                : '#ccc'
                            }`,
                            backgroundColor:
                              selectedValue === option.value ? '#fff' : '#fff',
                            cursor: 'pointer',
                            width: '140px',
                            textAlign: 'center',
                            transition: 'all 0.5s ease-in-out'
                          }}
                          onClick={() => setSelectedValue(option.value)}
                        >
                          <FormControlLabel
                            control={
                              <Radio
                                checked={selectedValue === option.value}
                                onChange={handleChange}
                                value={option.value}
                                sx={{
                                  color: '#000',
                                  '&.Mui-checked': {
                                    color: '#05bc05',
                                  },
                                }}
                              />
                            }
                            label={option.label}
                            sx={{
                              margin: 0,
                              '.MuiFormControlLabel-label': {
                                fontWeight: 'bold',
                                fontSize: '14px',
                                color:
                                  selectedValue === option.value
                                    ? '#05bc05'
                                    : '#aaa',
                                
                              },
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Box>

          {/* Submit Button */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              sx={{
                py: 1.5,
                fontWeight: 'bold',
                backgroundColor: '#4A4244',
                width: '150px',
              }}
            >
              دفع
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default PaymentModal;
