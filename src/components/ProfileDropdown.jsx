import React, { useState } from 'react';
import { Box, Menu, MenuItem, Typography, Divider } from '@mui/material';
import ProfileIcon from '../assets/svg/ProfileIcon';
import ArrowDown from '../assets/svg/ArrowDown';
import CarsIcon from '../assets/svg/CarsIcon';
import CurrentViolationsSmallIcon from '../assets/svg/CurrentViolationsSmallIcon';
import PreviousViolationsSmallIcon from '../assets/svg/PreviousViolationsSmallIcon';
import LogoutIcon from '../assets/svg/LogoutIcon';
import ProfileLightIcon from '../assets/svg/ProfileLightIcon';

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
        <Typography variant="subtitle1" sx={{ color: '#fff' }}>
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
          <ProfileLightIcon sx={{ p: 1 }} />
          <Typography
            sx={{ paddingRight: 1, paddingLeft: 1 }}
            variant="paragraph"
          >
            المعلومات الشخصية
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <CarsIcon sx={{ p: 1 }} />
          <Typography
            sx={{ paddingRight: 1, paddingLeft: 1 }}
            variant="paragraph"
          >
            سياراتى
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <CurrentViolationsSmallIcon sx={{ p: 1 }} />
          <Typography
            sx={{ paddingRight: 1, paddingLeft: 1 }}
            variant="paragraph"
          >
            المخالفات الحالية
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <PreviousViolationsSmallIcon sx={{ p: 1 }} />
          <Typography
            sx={{ paddingRight: 1, paddingLeft: 1 }}
            variant="paragraph"
          >
            المخالفات السابقة
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <LogoutIcon sx={{ m: 1 }} />
          <Typography
            sx={{ paddingRight: 1, paddingLeft: 1 }}
            variant="paragraph"
          >
            تسجيل الخروج
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ProfileDropdown;
