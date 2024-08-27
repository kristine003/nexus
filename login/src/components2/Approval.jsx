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
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Groups = () => {
  // const [rows, setRows] = React.useState([]);

  const [rows,setRows]=useState([]);
    useEffect(()=>{
      axios.get('http://localhost:4000/groups').then((res)=>{
        setRows(res.data);
      })
    },[])

    const [form, setForm] = useState({});

    let postGroup = (row) => {
      const approvedGroup = {
        grpName: row.grpName,
        subject: row.subject,
        description: row.description,
      };
      axios.post('http://localhost:4000/new-app', approvedGroup)
        .then((res) => {
          alert("Group Approved");
          // Delete the approved group from the database
          axios.delete(`http://localhost:4000/groupremoval/${row._id}`)
            .then((res) => {
              window.location.reload();
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const deleteGroup = (row) => {
      // console.log(row._id); // Print the ID value
      axios.delete(`http://localhost:4000/groupremoval/${row._id}`)
        .then((res) => {
          alert("Group Request Rejected");
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    };

    var navigate=useNavigate();
    

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
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 }, color: 'white' }}>
                <TableCell component="th" scope="row" align="center" sx={{ color: 'white' }}>
                  {row.grpName}
                </TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>{row.subject}</TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>{row.description}</TableCell>
                <TableCell align="center" sx={{ color: 'white' }}><Button variant='contained' color='inherit' onClick={()=>{postGroup(row)}} sx={{ backgroundColor: '#6b1ca2', '&:hover': { backgroundColor: '#6b2ca2' } }} >Approve</Button></TableCell>
                <TableCell align="center" sx={{ color: 'white' }}><Button variant='contained' color='inherit'onClick={()=>{deleteGroup(row)}} sx={{ backgroundColor: '#6b1ca2', '&:hover': { backgroundColor: '#6b2ca2' } }}>Reject</Button></TableCell>
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