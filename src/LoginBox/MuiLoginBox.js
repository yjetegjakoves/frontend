import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Login from '../Login/Login';

const MuiDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLoginSubmit = () => {
    // You can add additional logic here if needed
  };

  return (
    <>
      <Button onClick={handleOpen} sx={{ backgroundColor: '#ffffff' }}>Login</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
        sx={{ minWidth: '500px' }}
      >
        <DialogTitle id='dialog-title'>Login</DialogTitle>

        <DialogContent>
          <Login onSubmit={handleLoginSubmit} onClose={handleClose} />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;