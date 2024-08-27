import './Edit.css';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';

const Studygroups = () => {
  const [rows, setRows] = React.useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const handleButtonClick = () => {
    setShowPopup(true);
  };
  const handlePopupClose = () => {
    setShowPopup(false);
  };
  const location = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    grpName: '',
    subject: '',
    description: '',
  });

  useEffect(() => {
    axios.get('http://localhost:4000/approvals')
      .then((res) => {
        setRows(res.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    if (location.state != null) {
      setForm({
        ...form,
        grpName: location.state.groups.grpName,
        subject: location.state.groups.subject,
        description: location.state.groups.description
      });
      if (location.state.popup) {
        setShowPopup(true);
      }
    }
  }, []);

  let postData = () => {
    if (location.state != null) {
      axios
        .put(
          'http://localhost:4000/group-updation/' + location.state.groups._id,
          form
        )
        .then((res) => {
          alert('Data updated');
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post('http://localhost:4000/new-group', form)
        .then((res) => {
          alert('Group data sent for approval');
        })
        .catch();
    }
  };

  function valueCap(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');


  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="Search study groups..." className="search-input" />
        <button className="search-button">Search</button>
      </div>
      
      <TableContainer component={Paper} sx={{ backgroundColor: 'white', color: 'white', backgroundColor: 'transparent' ,marginBottom:'200px'}}>
        <Table sx={{ minWidth: 1200, borderStyle: 'solid', borderWidth: '0.5px', borderColor: 'white' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ color: 'white' }}>Group Name</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Subject</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Description</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}></TableCell>
              <TableCell align="center" sx={{ color: 'white' }}></TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.aname} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" align="center" sx={{ color: 'white' }}>
                  {row.grpName}
                </TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>{row.subject}</TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>{row.description}</TableCell>
                <TableCell align="center" sx={{ color: 'white' }}><Button variant='contained' color='inherit' sx={{ backgroundColor: '#6b1ca2', '&:hover': { backgroundColor: '#6b2ca2' } }} >View</Button></TableCell>
                <TableCell align="center" sx={{ color: 'white' }}><Button variant='contained' color='inherit' sx={{ backgroundColor: '#6b1ca2', '&:hover': { backgroundColor: '#6b2ca2' } }} >Join</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <button
          className="create-button"
          style={{
            position: 'absolute',
            bottom: '70px',
            right: '70px',
          }}
          onClick={handleButtonClick}
        >
          Create Group
        </button>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content2">
            <span className="close" onClick={handlePopupClose}>
              &times;
            </span>
            <p>Create New Group</p>
            <input
              type="text"
              placeholder="Title"
              className="popup-input"
              name="grpName"
              value={form.grpName}
              onChange={valueCap}
            />
            <input
              type="text"
              placeholder="Subject"
              className="popup-input"
              name="subject"
              value={form.subject}
              onChange={valueCap}
            />
            <input
              type="text"
              placeholder="Description"
              className="popup-input"
              name="description"
              value={form.description}
              onChange={valueCap}
            />
            {/* <input
              type="text"
              placeholder="Level of Study"
              className="popup-input"
            /> */}
            {/* <input
              type="text"
              placeholder="Availability"
              className="popup-input"
            />
            <input
              type="text"
              placeholder="Members Limit"
              className="popup-input"
            /> */} 
            {/* <input
              type="text"
              placeholder="Password"
              className="popup-input"
            /> */}
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
  Send for Approval
</Button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Studygroups;