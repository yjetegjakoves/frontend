import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Signup from '../Signup/Signup';

const MuiDialogSignup = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen} sx = {{ backgroundColor: '#ffffff'}}>Sign Up</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
        sx = {{ minWidth: '500px'}}
      >
        <DialogTitle id='dialog-title'>Sign Up</DialogTitle>

        <DialogContent>
          <Signup onClose={handleClose} />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialogSignup;