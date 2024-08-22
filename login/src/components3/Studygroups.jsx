import './Edit.css';
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Studygroups = () => {
  const [rows, setRows] = React.useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const handleButtonClick = () => {
    setShowPopup(true);
  };
  const handlePopupClose = () => {
    setShowPopup(false);
  };


  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="Search study groups..." className="search-input" />
        <button className="search-button">Search</button>
      </div>
      
      <TableContainer component={Paper} sx={{ backgroundColor: 'white', color: 'white', backgroundColor: 'transparent' ,marginBottom:'400px'}}>
        <Table sx={{ minWidth: 1200, borderStyle: 'solid', borderWidth: '0.5px', borderColor: 'white' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ color: 'white' }}>Group Name</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Subject</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Description</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Members</TableCell>
              {/* <TableCell align="center" sx={{ color: 'white' }}>Status</TableCell> */}
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
          <div className="popup-content">
            <span className="close" onClick={handlePopupClose}>
              &times;
            </span>
            <p>Create New Group</p>
            <input
              type="text"
              placeholder="Title"
              className="popup-input"
            />
            <input
              type="text"
              placeholder="Subject"
              className="popup-input"
            />
            <input
              type="text"
              placeholder="Description"
              className="popup-input"
            />
            <input
              type="text"
              placeholder="Level of Study"
              className="popup-input"
            />
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
            <button
              onClick={() => {
                // Add code to create a new group
                handlePopupClose();
              }}
              className="popup-button"
            >
              Send for Approval
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Studygroups;