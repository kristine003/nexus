
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AdbIcon from '@mui/icons-material/Adb';
import Tooltip from '@mui/material/Tooltip';
import { Avatar } from '@mui/material';
import './Edit.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { globalProfilePicture } from './globals';

const buttonStyles = {
  fontSize: 14,
  fontFamily: 'serif',
};

document.body.style.backgroundImage = "url('purple3.png')";
document.body.style.cssText = ` 
  background-image: url('purple3.png'); 
  background-size: cover; 
  background-repeat: no-repeat; 
  background-position: center; 
`;

const Nexnav = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const handleProfileClick = () => {
    navigate('/profile', { state: { from: location.pathname } });
  };

  if (location.pathname === '/home'  || location.pathname === '/studygroups' || location.pathname === '/profile') {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="absolute"
          sx={{
            backgroundColor: 'white',
            color: 'white',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: 2,
            }}
          >
            <Typography variant="h6" noWrap component="a" sx={{ mr: 5, display: { xs: 'none', md: 'flex' }, fontFamily: 'serif', fontWeight: 700, letterSpacing: '.3rem', color: 'white', textDecoration: 'none', }}>
          <img src="logonamebg.png" alt="Logo" style={{ width: 255, height: 57, marginLeft: -16.5, marginTop: 3 }} />
            
          </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexGrow: 1,
              }}
            >
              <Button
                color="inherit"
                sx={buttonStyles}
                onClick={() => navigate('/home')}
              >
                Home
              </Button>
              <Box sx={{ margin: '0 45px' }} />
              <Button
                color="inherit"
                sx={buttonStyles}
                onClick={() => navigate('/about')}
              >
                About
              </Button>
              <Box sx={{ margin: '0 45px' }} />
              <Button
                color="inherit"
                sx={buttonStyles}
                onClick={() => navigate('/studygroups')}
              >
                Study Groups
              </Button>
              <Box sx={{ margin: '0 45px' }} />
              <Button
                color="inherit"
                sx={buttonStyles}
                onClick={() => navigate('/contact-us')}
              >
                Contact us
              </Button>
              <Box sx={{ margin: '0 45px' }} />
              <Button
                color="inherit"
                sx={buttonStyles}
                onClick={() => navigate('/')}
              >
                Login
              </Button>
              <Box sx={{ margin: '0 45px' }} />
            </Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleProfileClick}>
                <Avatar
                  alt="Profile Picture"
                  src="profile2.jpg"
                />
              </IconButton>
            </Tooltip>
          </Toolbar>
          </AppBar>
          </Box>
          </div>
      
    
    
  );
} else {
    return null;
  }
};


export default Nexnav;