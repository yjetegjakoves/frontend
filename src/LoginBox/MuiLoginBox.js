import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Login from '../Login/Login'; // Import the Login component

const MuiDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open dialog</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
        sx = {{ minWidth: '500px'}}
      >
        <DialogTitle id='dialog-title'>Login</DialogTitle>

        <DialogContent>
          {/* Replace DialogContentText with Login component */}
          <Login onClose={handleClose} />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* You can handle login logic directly in the Login component */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;