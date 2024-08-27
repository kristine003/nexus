import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Navbar from './Admindb';
import './Admindb.css'


document.body.style.backgroundImage = "url('purple3.png')";
document.body.style.cssText = `background-image: url('purple3.png'); background-size: cover; background-repeat: no-repeat; background-position: center;`;

const Useradmin = () => {
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state != null) {
      setForm({
        ...form,
        userName: location.state.nexus.userName,
        emailId: location.state.nexus.emailId,
        password: location.state.nexus.password,
        contNum: location.state.nexus.contNum,
      });
      if (location.state.popup) {
        setShowPopup(true);
      }
    }

    axios.get('http://localhost:4000/nexus')
      .then((res) => {
        setRows(res.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const deleteUser = (row) => {
    axios.delete(`http://localhost:4000/userremoval/${row._id}`)
      .then((res) => {
        alert("User data deleted");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [showPopup, setShowPopup] = useState(false);
  const handleButtonClick = (row) => {
    setShowPopup(true);
    setForm({
      userName: row.userName,
      emailId: row.emailId,
      password: row.password,
      contNum: row.contNum,
      _id: row._id,
    });
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  const [form, setForm] = useState({
    userName: '',
    emailId: '',
    password: '',
    contNum: '',
  });

  function valueCap(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  
  const handleUpload = () => {
    if (form._id) {
      axios.put(`http://localhost:4000/user-updation/${form._id}`, form)
        .then((res) => {
          alert("User data updated");
          // Fetch updated data from the server
          axios.get('http://localhost:4000/nexus')
            .then((res) => {
              setRows(res.data);
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to update user data");
        });
    } else {
      alert("Please select a user to update");
    }
    setShowPopup(false);
  };
  

  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <TableContainer component={Paper} sx={{ color:'white', backgroundColor: 'transparent' }}>
        <Table sx={{ minWidth: 1200, borderStyle: 'solid', borderWidth: '0.5px', borderColor: 'white' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ color: 'white' }}>Name</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Email ID</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Password&nbsp;</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Contact Number&nbsp;</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}></TableCell>
              <TableCell align="center" sx={{ color: 'white' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {rows.map((row) => (
              <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" align="center" sx={{ color: 'white' }}>
                  {row.userName}
                </TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>{row.emailId}</TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>{row.password}</TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>{row.contNum}</TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>
                <Button variant='contained' color='inherit' onClick={() => handleButtonClick(row)} sx={{ backgroundColor: '#6b1ca2', '&:hover': { backgroundColor: '#6b2ca2' } }} >Update</Button></TableCell>
                {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handlePopupClose}>
              &times;
            </span>
            <p>Create New Group</p>
            <input
              type="text"
              placeholder="Name"
              className="popup-input"
              name="userName"
              value={form.userName}
              onChange={valueCap}
            />
            <input
              type="text"
              placeholder="Email Id"
              className="popup-input"
              name="emailId"
              value={form.emailId}
              onChange={valueCap}
            />
            <input
              type="text"
              placeholder="Password"
              className="popup-input"
              name="password"
              value={form.password}
              onChange={valueCap}
            />
            <input
              type="text"
              placeholder="contNum"
              className="popup-input"
              name="contNum"
              value={form.contNum}
              onChange={valueCap}
            />
        <Button variant="contained" sx={{ backgroundColor: '#6b1ca2', '&:hover': { backgroundColor: '#6b2ca2', } }} onClick={handleUpload} > Update </Button></div>
            </div>
          )}
                <TableCell align="center" sx={{ color: 'white' }}>
                  <Button variant='contained' color='inherit' onClick={() => { deleteUser(row) }} sx={{ backgroundColor: '#6b1ca2', '&:hover': { backgroundColor: '#6b2ca2' } }}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default Useradmin;