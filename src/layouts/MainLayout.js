import React, { useState } from 'react';
import '../styles/global.css';
import CurrentViolations from '../components/CurrentViolations';
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
import ProfileDropdown from '../components/ProfileDropdown';
import ConfirmData from '../components/ConfirmData';
import ProfileIcon from '../assets/svg/ProfileIcon';
import CarsIcon from '../assets/svg/CarsIcon';
import CurrentViolationsSmallIcon from '../assets/svg/CurrentViolationsSmallIcon';
import PreviousViolationsSmallIcon from '../assets/svg/PreviousViolationsSmallIcon';
import ProfileData from '../components/ProfileData';
const MainLayout = ({ children }) => {
  const [activeItem, setActiveItem] = useState('personalInfo');

  const renderContent = () => {
    switch (activeItem) {
      case 'personalInfo':
        return <ProfileData />;
      case 'cars':
        return <Typography>سياراتي</Typography>;
      case 'currentViolations':
        return <CurrentViolations setActiveItem={setActiveItem} />;
      case 'previousViolations':
        return <CurrentViolations setActiveItem={setActiveItem} />;
      case 'confirmData':
        return <ConfirmData setActiveItem={setActiveItem} />;
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
          <Grid item xs={2.5}>
            <Box
              sx={{
                width: '100%',
                bgcolor: '#FFFFFF',
                p: 3,
                borderRadius: '8px',
                height: '500px',
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ m: 1.5, fontWeight: 'bold' }}
              >
                حسابي
              </Typography>
              <List>
                <ListItem
                  button
                  selected={activeItem === 'personalInfo'}
                  onClick={() => setActiveItem('personalInfo')}
                  sx={
                    activeItem === 'personalInfo' && {
                      backgroundColor: '#4A4244',
                      borderRadius: 2,
                    }
                  }
                >
                  <ListItemIcon>
                    <ProfileIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ textAlign: 'right', cursor: 'pointer' }}
                    primary="المعلومات الشخصية"
                  />
                </ListItem>
                <ListItem
                  button
                  selected={activeItem === 'cars'}
                  onClick={() => setActiveItem('cars')}
                  sx={
                    activeItem === 'cars' && {
                      backgroundColor: '#4A4244',
                      borderRadius: 2,
                    }
                  }
                >
                  <ListItemIcon>
                    <CarsIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ textAlign: 'right', cursor: 'pointer' }}
                    primary="سياراتي"
                  />
                </ListItem>
              </List>
              <Typography
                variant="subtitle1"
                sx={{ m: 1.5, fontWeight: 'bold' }}
              >
                المخالفات
              </Typography>
              <List>
                <ListItem
                  button
                  selected={activeItem === 'currentViolations'}
                  onClick={() => setActiveItem('currentViolations')}
                  sx={
                    activeItem === 'currentViolations' && {
                      backgroundColor: '#4A4244',
                      borderRadius: 2,
                    }
                  }
                >
                  <ListItemIcon>
                    <CurrentViolationsSmallIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ textAlign: 'right', cursor: 'pointer' }}
                    primary="المخالفات الحالية"
                  />
                </ListItem>
                <ListItem
                  button
                  selected={activeItem === 'previousViolations'}
                  onClick={() => setActiveItem('previousViolations')}
                  sx={
                    activeItem === 'previousViolations' && {
                      backgroundColor: '#4A4244',
                      borderRadius: 2,
                    }
                  }
                >
                  <ListItemIcon>
                    <PreviousViolationsSmallIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ textAlign: 'right', cursor: 'pointer' }}
                    primary="المخالفات السابقة"
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={9.5}>
            <Box
              sx={{
                bgcolor: 'transparent',
                borderRadius: '8px',
                //boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                minHeight: '300px',
                paddingBottom: '30px',
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
