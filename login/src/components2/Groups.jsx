
import React, { useEffect, useState } from 'react';
import Navbar from './Admindb'; // Import the Navbar component
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './Admindb.css'

const Groups = () => {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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
  
    axios.get('http://localhost:4000/approvals')
      .then((res) => {
        setRows(res.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

    const dltGroup = (row) => {
      // console.log(row._id); // Print the ID value
      axios.delete(`http://localhost:4000/grpremoval/${row._id}`)
        .then((res) => {
          alert("Group data deleted");
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    };

    // let updateGroup = (groups) => {
    //   navigate('/studygroups', {
    //     state: {
    //       groups: {
    //         grpName: groups.grpName,
    //         subject: groups.subject,
    //         description: groups.description,
    //       },
    //       popup: true,
    //     },
    //   });
    // };

    const [showPopup, setShowPopup] = useState(false);
    const handleButtonClick = (row) => {
      setShowPopup(true);
      setForm({
        grpName: row.grpName,
        subject: row.subject,
        description: row.description,
        _id: row._id,
      });
    };

    const handlePopupClose = () => {
      setShowPopup(false);
    };
    const [form, setForm] = useState({
      grpName: '',
      subject: '',
      description: '',
    });

    function valueCap(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
    
    const handleUpload = () => {
      if (form._id) {
        axios.patch(`http://localhost:4000/group-updation/${form._id}`, form)
          .then((res) => {
            alert("Group data updated");
            // Fetch updated data from the server
            axios.get('http://localhost:4000/approvals')
              .then((res) => {
                setRows(res.data);
              })
              .catch((error) => {
                console.error(error);
              });
          })
          .catch((error) => {
            console.error(error);
            alert("Failed to update group data");
          });
      } else {
        alert("Please select a group to update");
      }
      setShowPopup(false);
    };
    
    
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <TableContainer component={Paper} sx={{ color: 'white', backgroundColor: 'transparent' }}>
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
              <TableRow key={row.gname} sx={{ '&:last-child td, &:last-child th': { border: 0 }, color: 'white' }}>
                <TableCell component="th" scope="row" align="center" sx={{ color: 'white' }}>
                  {row.grpName}
                </TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>{row.subject}</TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>{row.description}</TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>
                <Button variant='contained' color='inherit' onClick={() => handleButtonClick(row)} sx={{ backgroundColor: '#6b1ca2', '&:hover': { backgroundColor: '#6b2ca2' } }} >Update</Button></TableCell>
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
        <Button variant="contained" sx={{ backgroundColor: '#6b1ca2', '&:hover': { backgroundColor: '#6b2ca2', } }} onClick={handleUpload} > Update </Button></div>
            </div>
          )}
                <TableCell align="center" sx={{ color: 'white' }}><Button variant='contained' color='inherit'onClick={()=>{dltGroup(row)}} sx={{ backgroundColor: '#6b1ca2', '&:hover': { backgroundColor: '#6b2ca2' } }}>Delete</Button></TableCell>
                {/* <TableCell align="right">{row.members}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Groups;