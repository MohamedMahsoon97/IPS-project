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
import { ArrowForward, ArrowBack } from '@mui/icons-material';

const CurrentViolations = () => {
  const violations = [
    {
      id: 1,
      image: 'car1.jpg', // Replace with actual image paths
      date: '15/11/2024',
      fine: '511 ر.س',
      location: 'رياض، الحي الثاني، شارع 12',
      car: 'فورد / فوكس',
    },
    {
      id: 2,
      image: 'car2.jpg',
      date: '15/11/2024',
      fine: '511 ر.س',
      location: 'رياض، الحي الثاني، شارع 12',
      car: 'تويوتا / كورولا',
    },
    {
      id: 3,
      image: 'car3.jpg',
      date: '15/11/2024',
      fine: '511 ر.س',
      location: 'رياض، الحي الثاني، شارع 12',
      car: 'هونداي / هوندا',
    },
  ];

  return (
    <Box sx={{ p: 4 }}>
      {/* Breadcrumb and Filter */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">الرئيسية / المخالفات الحالية</Typography>
        <Select defaultValue="all" size="small" sx={{ width: 150 }}>
          <MenuItem value="all">الكل</MenuItem>
          <MenuItem value="paid">مدفوعة</MenuItem>
          <MenuItem value="unpaid">غير مدفوعة</MenuItem>
        </Select>
      </Box>

      {/* Violations Grid */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {violations.map((violation) => (
          <Grid item xs={12} md={4} key={violation.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={violation.image}
                alt={violation.car}
              />
              <CardContent>
                <Typography variant="body1">{violation.car}</Typography>
                <Typography variant="body2" color="text.secondary">
                  تاريخ المخالفة: {violation.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {violation.fine}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  مكان المخالفة: {violation.location}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
        <IconButton>
          <ArrowBack />
        </IconButton>
        <Button variant="contained" sx={{ mx: 2 }}>
          التالي
        </Button>
        <Button variant="outlined">رجوع</Button>
        <IconButton>
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CurrentViolations;
