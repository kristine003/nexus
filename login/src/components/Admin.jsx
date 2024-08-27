import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const adminCredentials = {
  email: 'admin@example.com',
  password: 'password123',
};

const Admin = () => {
  const [form, setForm] = useState({ Email: '', Password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.Email === adminCredentials.email && form.Password === adminCredentials.password) {
      navigate('/groups');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
        backgroundColor: 'transparent',
        p: 20.9,
        height: '42.42ch',
        borderRadius: '8px',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <br />
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          fontSize: 30,
          fontFamily: 'serif',
          position: 'absolute',
          top: '28%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          letterSpacing: '7px',
        }}
      >
        ADMIN LOGIN
      </Typography>
      <div>
        <TextField
          required
          id="email"
          label="Email"
          name="Email"
          type="email"
          value={form.Email}
          onChange={handleChange}
          sx={{ backgroundColor: '#fff' }}
        />
        <br />
        <TextField
          required
          id="password"
          label="Password"
          name="Password"
          type="password"
          value={form.Password}
          onChange={handleChange}
          sx={{ backgroundColor: '#fff' }}
        />
        <br />
        {error && (
          <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>
        )}
        <br />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#6b1ca2',
            '&:hover': { backgroundColor: '#6b2ca2' },
          }}
        >
          Login
        </Button>
      </div>
    </Box>
  );
};

export default Admin;