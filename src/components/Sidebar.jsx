import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShieldIcon from '@mui/icons-material/Shield';

const Sidebar = () => {
  return (
    <Box
      sx={{
        bgcolor: '#f5f5f5',
        p: 2,
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        height: '100%',
      }}
    >
      <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
        حسابي
      </Typography>
      <List>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="المعلومات الشخصية" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DirectionsCarIcon />
          </ListItemIcon>
          <ListItemText primary="سياراتي" />
        </ListItem>
      </List>
      <Typography variant="subtitle1" sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}>
        المخالفات
      </Typography>
      <List>
        <ListItem button selected>
          <ListItemIcon>
            <ShieldIcon />
          </ListItemIcon>
          <ListItemText primary="المخالفات الحالية" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShieldIcon />
          </ListItemIcon>
          <ListItemText primary="المخالفات السابقة" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
