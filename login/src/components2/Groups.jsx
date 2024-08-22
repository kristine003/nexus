import React from 'react';
import Navbar from './Admindb'; // Import the Navbar component
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Groups = () => {
  const [rows, setRows] = React.useState([]);

  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <TableContainer component={Paper} sx={{ backgroundColor: 'white', color: 'white', backgroundColor: 'transparent' }}>
        <Table sx={{ minWidth: 1200, borderStyle: 'solid', borderWidth: '0.5px', borderColor: 'white' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ color: 'white' }}>Group Name</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Subject</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Description</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Members</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.aname} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.group}
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.members}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Groups;