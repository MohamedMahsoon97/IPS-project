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
} from '@mui/material';

const ConfirmData = () => {
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
          <Typography variant="h7">الرئيسية / </Typography>
          <Typography variant="h7">المخالفات الحالية / </Typography>
          <Typography variant="h7" color="text.secondary">
            تأكيد البيانات
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
        height="300px"
      >
        <Box sx={{ width: '50%' }} borderLeft={1} borderColor="#dcd8d8">
          <Grid
            item
            xs={6}
            container
            spacing={2}
            direction="column"
            width="100%"
            gap="30px"
          >
            <Box display="flex">
              <Typography variant="body2" color="text.secondary">
                موديل السيارة
              </Typography>

              <Typography variant="body2" textAlign="right" fontWeight="bold">
                / هيونداي
              </Typography>
            </Box>

            <Box display="flex">
              <Typography variant="body2" color="text.secondary">
                رقم اللوحة
              </Typography>

              <Typography variant="body2" textAlign="right" fontWeight="bold">
                / 4353564
              </Typography>
            </Box>

            <Box display="flex">
              <Typography variant="body2" color="text.secondary">
                نوع الترخيص
              </Typography>

              <Typography variant="body2" textAlign="right" fontWeight="bold">
                / خصوصي
              </Typography>
            </Box>

            <Box display="flex">
              <Typography variant="body2" color="text.secondary">
                المدينة
              </Typography>

              <Typography variant="body2" textAlign="right" fontWeight="bold">
                / كركوم
              </Typography>
            </Box>

            <Box display="flex">
              <Typography variant="body2" color="text.secondary">
                سنة الصنع
              </Typography>

              <Typography variant="body2" textAlign="right" fontWeight="bold">
                / 2000
              </Typography>
            </Box>
          </Grid>
        </Box>
        <Box sx={{ width: '50%' }}>
          <Grid
            item
            xs={6}
            container
            spacing={2}
            direction="column"
            width="100%"
            gap="30px"
          >
            <Box display="flex">
              <Typography variant="body2" color="text.secondary">
                شاسيه
              </Typography>

              <Typography variant="body2" textAlign="right" fontWeight="bold">
                / 4235532543
              </Typography>
            </Box>

            <Box display="flex">
              <Typography variant="body2" color="text.secondary">
                موتور
              </Typography>

              <Typography variant="body2" textAlign="right" fontWeight="bold">
                / 4353564
              </Typography>
            </Box>

            <Box display="flex">
              <Typography variant="body2" color="text.secondary">
                تاريخ انتهاء الرخصة
              </Typography>

              <Typography variant="body2" textAlign="right" fontWeight="bold">
                / 11/2/2025
              </Typography>
            </Box>
          </Grid>
        </Box>
      </Box>

      <Box display="flex" justifyContent="end" alignItems="center" mt={10}>
        <Button
          variant="contained"
          sx={{
            mx: 2,
            backgroundColor: '#4a4244',
            color: '#fff',
            borderRadius: '10px',
            width: '130px',
            height: '37px',
            border: 'none',
          }}
        >
          التالي
        </Button>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: '#fff',
            color: '#4a4244',
            borderRadius: '10px',
            width: '130px',
            height: '37px',
            border: 'none',
          }}
        >
          رجوع
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmData;
