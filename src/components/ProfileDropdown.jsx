import React, { useState } from 'react';
import {
  Box,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Divider,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShieldIcon from '@mui/icons-material/Shield';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ProfileIcon from '../assets/svg/ProfileIcon';
import ArrowDown from '../assets/svg/ArrowDown';
import CarsIcon from '../assets/svg/CarsIcon';
import CurrentViolationsSmallIcon from '../assets/svg/CurrentViolationsSmallIcon';
import PreviousViolationsSmallIcon from '../assets/svg/PreviousViolationsSmallIcon';

const ProfileDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <div className="profile-dropdown" onClick={handleMenuOpen}>
        <ProfileIcon />
        <Typography
          variant="subtitle1"
          sx={{ color: '#fff' }}
        >
          أهلاً محمد
        </Typography>
        <ArrowDown />
      </div>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
            borderRadius: '8px',
          },
        }}
      >
        <MenuItem onClick={handleMenuClose}>
          <ProfileIcon sx={{ p: 1 }} />
          المعلومات الشخصية
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <CarsIcon sx={{ p: 1 }} />
          سياراتى
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <CurrentViolationsSmallIcon sx={{ p: 1 }} />
          المخالفات الحالية
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <PreviousViolationsSmallIcon sx={{ p: 1 }} />
          المخالفات السابقة
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ExitToAppIcon sx={{ m: 1 }} />
          تسجيل الخروج
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ProfileDropdown;
