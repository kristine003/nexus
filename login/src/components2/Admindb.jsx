import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './Admindb.css'
import { Button, Tab, Tabs } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';


document.body.style.cssText = `background-image: url('purple3.png'); background-size: cover; background-repeat: no-repeat; background-position: center;`;

  const Navbar = () => {
    const location = useLocation();
    const [value, setValue] = React.useState(0);
    let navigate = useNavigate();
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  if (location.pathname === '/addb' || location.pathname === '/groups' || location.pathname === '/useradm' || location.pathname === '/apprv') {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute" sx={{ color: 'white', backgroundColor: 'transparent', boxShadow: 'none', }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: 2, }}>
            <Link to="/">
              <Typography variant="h6" noWrap component="a" sx={{ mr: 5, display: { xs: 'none', md: 'flex' }, fontFamily: 'serif', fontWeight: 700, letterSpacing: '.3rem', color: 'white', textDecoration: 'none', }}>
                <img src="logonamebg.png" alt="Logo" style={{ width: 255, height: 57, marginLeft: -16.5, marginTop: 3 }} />
              </Typography>
            </Link>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, }}></Box>
            <Typography variant="h6" noWrap component="a" sx={{ fontSize: 30, fontFamily: 'serif', position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', letterSpacing: '7px' }}>
              ADMIN DASHBOARD
            </Typography>
            <div>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
            <Tabs value={value} onChange={handleChange} textColor="white" 
 sx={{ position: 'absolute', top: '150%', left: '50%', transform: 'translate(-50%, -50%)'}}>
              <Tab label="Groups" onClick={() => navigate('/groups')} />

              <Tab label="Users" onClick={() => navigate('/useradm')} />
              <Tab label="Approvals" onClick={() => navigate('/apprv')}/>
              <Tab label="Logout" onClick={() => navigate('/adm')} />
            </Tabs>
          </Toolbar>
        </AppBar>
       
      </Box>
    );
  } else {
    return null;
  }
};

export default Navbar;