
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Checkbox, FormControlLabel, TextField, Alert, Typography } from '@mui/material';

const Register = () => {
  // const [ counter, setCounter ]=useState(0);
  const [form,setForm]=useState({
    "userName":'',
    "emailID":'',
    "password":'',
    "contNum":''
  })

  useEffect(()=>{
    if(location.state!=null){
      setForm({...form,
        userName:location.state.nexus.userName,
        emailId:location.state.nexus.emailID,
        password:location.state.nexus.password,
        contNum:location.state.nexus.contNum,
      })
    }
  },[])
  
    const location=useLocation();
    var navigate=useNavigate();
    let postData=()=>{
      if(location.state!=null){
        axios.put('http://localhost:4000/user-updation/'+location.state.nexus._id,form).then((res)=>{
          alert('Data updated');
          navigate('/')
        }).catch((error)=>{
          console.log(error);
        })
      }
      else{
      //console.log(form);
      axios.post('http://localhost:4000/new-user',form).then((res)=>{
        alert("User data posted")
      }).catch()
    }
  }
  
    function valueCap(e){
      //console.log(e)
      setForm({...form,[e.target.name]:e.target.value})
    }

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');

  const showData = () => {
    if (!termsAccepted) {
      setError('You must accept the terms and conditions.');
      return;
    }
    if (!form.userName || !form.emailId || !form.contNum|| !form.password) {
      setError('All fields are required.');
      return;
    }
    setError('');
    alert('Registeration Completed');
    console.log(form);
  };

  // const valueCap = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
        backgroundColor: 'transperant', 
        p: 20.9,
        height:'42.42ch',
        borderRadius: '8px', 
      }}
      noValidate
      autoComplete="off"
    >
      <br />
      <Typography variant="h6" noWrap component="a" sx={{
  fontSize: 32,
  fontFamily: 'serif',
  position: 'absolute',
  top: '28%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color:'white',
  letterSpacing:'7px'
}}>
              REGISTER
            </Typography>
      <div>
        <TextField
          required
          id="name"
          label="Name"
          name="userName"
          value={form.userName}
          onChange={valueCap}
          sx={{ backgroundColor: '#fff' }} 
        />
        <br />
        <TextField
          required
          id="email"
          label="Email"
          name="emailId"
          type="email"
          value={form.emailId}
          onChange={valueCap}
          sx={{ backgroundColor: '#fff' }}
        />
        <br />
        <TextField
          required
          id="password"
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={valueCap}
          sx={{ backgroundColor: '#fff' }}
        />
        <br />
        <TextField
          required
          id="contact"
          label="Contact Number"
          name="contNum"
          type="tel"
          value={form.contNum}
          onChange={valueCap}
          sx={{ backgroundColor: '#fff' }}
        />
        <br />
        <FormControlLabel
          control={
            <Checkbox
              checked={termsAccepted}
              onChange={handleCheckboxChange}
              sx={{ color: '#FFFFFF' }}
            />
          }
          label={
            <span style={{ color: '#FFFFFF' }}>
              I agree to the terms and conditions
            </span>
          }
        />
        <br />
        {error && <Alert severity="error">{error}</Alert>}
        

        <Button
  variant="contained"
  sx={{
    backgroundColor: '#6b1ca2',
    '&:hover': {
      backgroundColor: '#6b2ca2', 
    }
  }}
  onClick={postData}
>
  Register
</Button>

      </div>
    </Box>
  );
};

export default Register;