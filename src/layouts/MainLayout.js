import React, { useState } from 'react';
import '../styles/global.css';
import CurrentViolations from '../components/CurrentViolations';
import Sidebar from '../components/Sidebar';
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import IraqLogo from '../assets/IraqLogo.png';
import TrafficLogo from '../assets/TrafficLogo.png';
import PersonIcon from '@mui/icons-material/Person';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShieldIcon from '@mui/icons-material/Shield';
import PreviousViolation from '../components/PreviousViolation';
import ProfileDropdown from '../components/ProfileDropdown';
const MainLayout = ({ children }) => {
  const [activeItem, setActiveItem] = useState('personalInfo');

  const renderContent = () => {
    switch (activeItem) {
      case 'personalInfo':
        return <Typography>المعلومات الشخصية</Typography>;
      case 'cars':
        return <Typography>سياراتي</Typography>;
      case 'currentViolations':
        return <CurrentViolations />;
      case 'previousViolations':
        return <PreviousViolation />;
      default:
        return <Typography>الرجاء اختيار عنصر من القائمة</Typography>;
    }
  };
  return (
    <div>
      <div className="main-content-header">
        <div className="logo">
          <img src={IraqLogo} alt="IraqLogo" width="60px" height="100px" />
          <img src={TrafficLogo} alt="IraqLogo" width="80px" height="80px" />
        </div>
        <div className="title">
          <ProfileDropdown />
        </div>
      </div>
      <div className="violation-container">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Box
              sx={{
                width: '100%',
                bgcolor: '#f5f5f5',
                p: 2,
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                height: '100%',
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ mb: 2, fontWeight: 'bold' }}
              >
                حسابي
              </Typography>
              <List>
                <ListItem
                  button
                  selected={activeItem === 'personalInfo'}
                  onClick={() => setActiveItem('personalInfo')}
                >
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="المعلومات الشخصية" />
                </ListItem>
                <ListItem
                  button
                  selected={activeItem === 'cars'}
                  onClick={() => setActiveItem('cars')}
                >
                  <ListItemIcon>
                    <DirectionsCarIcon />
                  </ListItemIcon>
                  <ListItemText primary="سياراتي" />
                </ListItem>
              </List>
              <Typography
                variant="subtitle1"
                sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}
              >
                المخالفات
              </Typography>
              <List>
                <ListItem
                  button
                  selected={activeItem === 'currentViolations'}
                  onClick={() => setActiveItem('currentViolations')}
                >
                  <ListItemIcon>
                    <ShieldIcon />
                  </ListItemIcon>
                  <ListItemText primary="المخالفات الحالية" />
                </ListItem>
                <ListItem
                  button
                  selected={activeItem === 'previousViolations'}
                  onClick={() => setActiveItem('previousViolations')}
                >
                  <ListItemIcon>
                    <ShieldIcon />
                  </ListItemIcon>
                  <ListItemText primary="المخالفات السابقة" />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box
              sx={{
                p: 3,
                bgcolor: 'transparent',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                minHeight: '300px',
              }}
            >
              {renderContent()}
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MainLayout;
