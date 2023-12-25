import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Button,
    Menu,
    MenuItem
} from '@mui/material';
import { useNavigate } from 'react-router-dom'
import MuiDialog from '../LoginBox/MuiLoginBox';



//Navbar


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MuiDialogSignup from '../LoginBox/MuiSignupBox';

const MuiNavbar = () => {
    const history = useNavigate();
    const [anchorElementi, setAnchorElementi] = useState(null);
    const [openDialog, setOpenDialog] = useState(false); // New state for the dialog

    
    const hapur = Boolean(anchorElementi);

    const handleClose = () => {
        setAnchorElementi(null);
    };

    const handleClick = (event) => {
        setAnchorElementi(event.currentTarget);
    };

    const handleDialogOpen = () => {
        setOpenDialog(true);
        handleClose(); // Close the menu when opening the dialog
      };


    return (
        <AppBar position='static' sx={{ backgroundColor: '#2196f3'  }}>
        
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='logo'
                    sx={{ marginRight: '10px' }}
                >
                    {/* Your logo/icon */}
                </IconButton>
                
                <Typography variant='h6' component='div' sx={{ flexGrow: 1, fontFamily: 'Lobster', fontSize: '1.8rem', color: '#ffffff' }}>
                    Deri n'Shpi
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button onClick={handleDialogOpen} sx={{ 
                     color: '#FFFFFF',
                     marginRight: '10px',
                     '&:hover': {
                     color: '#00000'} }}>
                        <MuiDialogSignup open={openDialog} onClose={() => setOpenDialog(false)} />
                    </Button>
                    <Button onClick={handleDialogOpen} sx={{ color: '#FFFFFF' }}>
                        <MuiDialog open={openDialog} onClose={() => setOpenDialog(false)} />
                    </Button>
                </Stack>

                
            </Toolbar>
        </AppBar>
    );
};

export default MuiNavbar;