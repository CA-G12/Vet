import React, { useState } from 'react';
import './style.css';
import {
  Box, FormControl, InputLabel, Input, FormGroup, Select, MenuItem, SelectChangeEvent,
} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10%',
  boxShadow: 24,
  p: 4,
};

const PopUp = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [role, setRole] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" />

          <div className="contentPop">

            <img src="./pawsLogo.png" alt="logo" width="40px" height="40px" />

            <div className="SignBar">
              <span className="Sign-up"> Sign-up</span>
              <span> Sign-up </span>
            </div>
            <div className="SignMethdolog">
              <h3 className="Sign-up"> Sign Up to your Account</h3>
              <h4>
                <img src="./google.png" alt="logo" width="20px" height="20px" />
                Sign Up to your Account
              </h4>
            </div>
            <FormGroup>
              <FormControl>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input id="name" type="text" />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="email" type="email" />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" type="password" />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                <Input id="ConfirmPassword" type="password" />
              </FormControl>
            </FormGroup>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={role}
                label="Role"
                onChange={handleChange}
              >
                <MenuItem value="USER">User</MenuItem>
                <MenuItem value="DOCTOR">Doctor</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} />
        </Box>
      </Modal>
    </div>
  );
};
export default PopUp;
