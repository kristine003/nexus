import React from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';

const buttonStyles = {
  fontSize: 14,
  fontFamily: 'serif',
  margin: '0 20px'
};

document.body.style.backgroundImage = "url('purple3.png')";
document.body.style.cssText = ` background-image: url('purple3.png'); background-size: cover; background-repeat: no-repeat; background-position: center; `;

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === '/' || location.pathname === '/adm' || location.pathname === '/reg') {
    return (
      <Box sx={{ flexGrow: 1, marginTop: 7 }}>
        <AppBar position="absolute" sx={{ backgroundColor: 'white', color: 'white', backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
          <Typography variant="h6" noWrap component="a" sx={{ mr: 5, display: { xs: 'none', md: 'flex' }, fontFamily: 'serif', fontWeight: 700, letterSpacing: '.3rem', color: 'white', textDecoration: 'none', }}>
          <img src="logonamebg.png" alt="Logo" style={{ width: 255, height: 57, marginLeft: -16.5, marginTop: 3 }} />
            
          </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}></Box>
            <Typography>
              <Button color="inherit" component={Link} to="/" sx={buttonStyles}>
                User
              </Button>
              <Button color="inherit" component={Link} to="/adm" sx={buttonStyles}>
                Admin
              </Button>
              <Button color="inherit" component={Link} to="/reg" sx={buttonStyles}>
                Register
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  } else {
    return null;
  }
};

export default Navbar;