import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Select,
  MenuItem,
  List,
  ListItem,
} from '@mui/material';
import DriverIcon from '../assets/svg/DriverIcon';
const MyCars = ({ setActiveItem }) => {
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
        gap="30px"
      >
        <Box>
          <Typography component="span">الرئيسية / </Typography>
          <Typography component="span" color="text.secondary">
            سياراتي
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          padding: '30px',
          gap: '40px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '26px',
              lineHeight: '36px',
            }}
          >
            سياراتي
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#4a4244',
              color: '#fff',
              borderRadius: '15px',
              width: '200px',
              height: '60px',
              border: 'none',
              fontSize: '16px',
              fontWeight: 500,
            }}
            //  onClick={() => setActiveItem('fineInformation')}
          >
            اضافة سيارة
          </Button>
        </Box>

        <Box
          sx={{
            border: '1px solid #E4E4E4',
            borderRadius: '20px',
            padding: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '30px',
            }}
          >
            <Box>
              <DriverIcon />
            </Box>
            <Box>
              <Typography>
                انتهاء الترخيص{' '}
                <Typography component="span" sx={{ margin: '0 10px' }}>
                  25-12-2014
                </Typography>
              </Typography>
              <Typography>هونداي / فيرنا</Typography>
              <Typography>خصوصي</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MyCars;
