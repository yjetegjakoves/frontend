import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
// MuiDialogSignup.js

// ... (other imports)
import Signup from '../Signup/Signup';

const MuiDialogSignup = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignupSubmit = () => {
    // You can add additional logic here if needed
  };

  return (
    <>
      <Button onClick={handleOpen} sx={{ backgroundColor: '#ffffff' }}>Sign Up</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
        sx={{ minWidth: '500px' }}
      >
        <DialogTitle id='dialog-title'>Sign Up</DialogTitle>

        <DialogContent>
          <Signup onSubmit={handleSignupSubmit} onClose={handleClose} />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialogSignup;
