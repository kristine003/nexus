
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const Profile = () => {
  const [open, setOpen] = React.useState(false);

  const [selectedImage, setSelectedImage] = React.useState('profile2.jpg');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const [rows,setRows]=useState([]);
    useEffect(()=>{
      axios.get('http://localhost:4000/nexus').then((res)=>{
        setRows(res.data);
      })
    },[])

  //   function deleteData(p){
  //     axios.delete('http://localhost:4000/movieremoval/'+p).then((res)=>{
  //     alert("Movie data deleted")
  //     window.location.reload()
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  // }

  var navigate=useNavigate();
  let updateUser=(nexus)=>{
    navigate('/reg',{state:{nexus}})
  }


  return (
    <div className="profile-page">
      <div className="profile-header">
      <Avatar
  alt="Profile Picture"
  src={selectedImage}
  sx={{ width: 250, height: 250, marginTop: 7 }}
  onClick={handleOpen}
/>
        <Dialog open={open} onClose={handleClose} className="custom-dialog">
          <DialogTitle>Choose a Profile Picture</DialogTitle>
          <DialogContent>
            <div className="image-gallery">
              <img src="profile1.jpg" alt="Image 1" onClick={() => {
        setSelectedImage('profile1.jpg');
        setOpen(false);
      }} />
              <img src="profile2.jpg" alt="Image 2" onClick={() => {
        setSelectedImage('profile2.jpg');
        setOpen(false);
      }} />
              <img src="profile3.jpg" alt="Image 3" onClick={() => {
        setSelectedImage('profile3.jpg');
        setOpen(false);
      }} />
              <img src="profile4.jpg" alt="Image 4" onClick={() => {
        setSelectedImage('profile4.jpg');
        setOpen(false);
      }} />
              <img src="profile5.jpg" alt="Image 5" onClick={() => {
        setSelectedImage('profile5.jpg');
        setOpen(false);
      }} />
              <img src="profile6.jpg" alt="Image 6" onClick={() => {
        setSelectedImage('profile6.jpg');
        setOpen(false);
      }} />
              <img src="profile7.jpg" alt="Image 7" onClick={() => {
        setSelectedImage('profile7.jpg');
        setOpen(false);
      }} />
              <img src="profile8.jpg" alt="Image 8" onClick={() => {
        setSelectedImage('profile8.jpg');
        setOpen(false);
      }} />
              {/* <img src="profile9.jpg" alt="Image 3" onClick={() => console.log('Image 3 selected')} /> */}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
      <br />
      <div>
        
      <TableContainer component={Paper} sx={{ backgroundColor: 'transparent'}} >
      <Table sx={{ minWidth: 950, boxShadow:0, '& .MuiTableCell-root': { color: 'white' } }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email ID</TableCell>
            <TableCell align="right">Password&nbsp;</TableCell>
            <TableCell align="right">Contact Number&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.userName}
              </TableCell>
              <TableCell align="right">{row.emailId}</TableCell>
              <TableCell align="right">{row.password}</TableCell>
              <TableCell align="right">{row.contNum}</TableCell>
              <TableCell align="right"><Button variant='contained' color='inherit'onClick={()=>{updateUser(row)}} sx={{ backgroundColor: '#6b1ca2', '&:hover': { backgroundColor: '#6b2ca2' } }} >Update</Button></TableCell>
              {/* <TableCell align="right"><Button variant='contained' color='inherit'onClick={()=>{deleteData(row._id)}}>Delete</Button></TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

      <br />
      <br />
      <div className="card-container">
      <Tooltip title="Your Study Groups">
        <Card sx={{ marginRight: 15, width: 210,height: 143 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              // image="white3.jpg"
              alt="Your Groups"
            />
          </CardActionArea>
        </Card>
        </Tooltip>

        <Tooltip title="Messages">
        <Card sx={{ marginRight: 10, width: 210,height: 140 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              // image="white4.jpg"
              alt="Messages"
            />
          </CardActionArea>
        </Card>
        </Tooltip>
        <Tooltip title="Study Materials">
        <Card sx={{ marginLeft: 10, width: 210,height: 140 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              // image="white1.png"
              alt="Materials"
            />
          </CardActionArea>
        </Card>
        </Tooltip>
        <Tooltip title="FAQs">
        <Card sx={{ marginLeft: 15, width: 210,height: 140 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              // image="white2.jpeg"
              alt="FAQS"
            />
          </CardActionArea>
        </Card>
        </Tooltip>
      </div>
      <style>
        {`
          .profile-page {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
          }
          .profile-header {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
          }
          .card-container {
            display: flex;
            flex-direction: row;
          }
          .image-gallery {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
          .image-gallery img {
            width: 100px;
            height: 100px;
            margin: 10px;
            border-radius: 50%;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

export default Profile