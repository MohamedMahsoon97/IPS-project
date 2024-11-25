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
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import cardImg from '../assets/images-(5).png'

const CurrentViolations = () => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: 'absolute',
          bottom: '-25%',
          right: '427px',
          transform: 'translateY(-50%)',
          zIndex: 1,
          backgroundColor: '#fff',
          '&:hover': { backgroundColor: '#f0f0f0' },
        }}
      >
        <ArrowForward />
      </IconButton>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: 'absolute',
          bottom: '-25%',
          left: '427px',
          transform: 'translateY(-50%)',
          zIndex: 1,
          backgroundColor: '#fff',
          '&:hover': { backgroundColor: '#f0f0f0' },
        }}
      >
        <ArrowBack />
      </IconButton>
    );
  };
  const settings = {
    dots: false, // Enable dots navigation
    infinite: true, // Loop slides
    speed: 500, // Transition speed in ms
    slidesToShow: 3, // Number of cards visible
    slidesToScroll: 1, // Number of cards to scroll
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Previous Arrow
    responsive: [
      {
        breakpoint: 1024, // For devices <= 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // For devices <= 600px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const violations = [
    {
      id: 1,
      image:
        'data:image/jpeg;base64,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', // Replace with actual image paths
      date: '15/11/2024',
      fine: '511 ر.س',
      location: 'رياض، الحي الثاني، شارع 12',
      car: 'فورد / فوكس',
    },
    {
      id: 2,
      image:
        'data:image/jpeg;base64,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',
      date: '15/11/2024',
      fine: '511 ر.س',
      location: 'رياض، الحي الثاني، شارع 12',
      car: 'تويوتا / كورولا',
    },
    {
      id: 3,
      image:
        'data:image/jpeg;base64,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',
      date: '15/11/2024',
      fine: '511 ر.س',
      location: 'رياض، الحي الثاني، شارع 12',
      car: 'هونداي / هوندا',
    },
  ];

  return (
    <Box sx={{ p: 4 }}>
      {/* Breadcrumb and Filter */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 6 }}
        backgroundColor="#fff"
        borderRadius={3}
        padding={1}
      >
        <Typography variant="h6">الرئيسية / المخالفات الحالية</Typography>
        <Select defaultValue="all" size="small" sx={{ width: 150 }}>
          <MenuItem value="all">الكل</MenuItem>
          <MenuItem value="paid">مدفوعة</MenuItem>
          <MenuItem value="unpaid">غير مدفوعة</MenuItem>
        </Select>
      </Box>

      <Slider {...settings}>
        {violations.map((violation, index) => (
          <Box
            key={index}
            sx={{
              padding: '0 10px', // Padding creates space between cards
            }}
          >
            <Card
              key={index}
              sx={{
                padding: '20px', // Padding creates space between cards
                borderRadius: '20px',
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={cardImg}
                alt={violation.car}
                sx={{
                  borderRadius: '20px',
                }}
              />
              <CardContent sx={{ direction: 'rtl' }}>
                {/* <Typography variant="body1">{violation.car}</Typography>
                <Typography variant="body2" color="text.secondary">
                  تاريخ المخالفة: {violation.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {violation.fine}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  مكان المخالفة: {violation.location}
                </Typography> */}
                <Grid
                  item
                  xs={6}
                  container
                  spacing={1}
                  alignItems="center"
                  direction="row"
                >
                  <Grid
                    spacing={1}
                    alignItems="center"
                    direction="column"
                    sx={{ marginBottom: 1 }}
                  >
                    {/* Car and Plate */}
                    <Grid item xs={6}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <DirectionsCarIcon fontSize="small" />
                        <Typography variant="body2" fontWeight="bold">
                          {violation.car}
                        </Typography>
                      </Box>
                    </Grid>
                    {/* Plate */}
                    <Grid item xs={6}>
                      <Typography
                        variant="body2"
                        textAlign="right"
                        fontWeight="bold"
                      >
                        22-D-400
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* Violation Date */}
                  <Grid
                    spacing={1}
                    alignItems="center"
                    direction="column"
                    sx={{ marginBottom: 1 }}
                  >
                    <Grid item xs={6}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <CalendarTodayIcon fontSize="small" />
                        <Typography variant="body2" color="text.secondary">
                          تاريخ المخالفة
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">
                        {violation.date}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Violation Location */}
                <Box display="flex" alignItems="center" gap={1}>
                  <LocationOnIcon fontSize="small" />
                  <Typography variant="body2" color="text.secondary">
                    مكان المخالفة {violation.location}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
      {/* </Grid> */}

      <Box display="flex" justifyContent="end" alignItems="center" mt={8}>
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

export default CurrentViolations;
