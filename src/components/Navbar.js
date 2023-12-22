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
import Login from '../Login/Login';




import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MuiNavbar = () => {
    const history = useNavigate();
    const [anchorElementi, setAnchorElementi] = useState(null);
    const [openLogin, setOpenLogin] = useState(false);
    const handleLoginClick = () => {
        history('/login'); 
        handleClose(); 
    };
    const hapur = Boolean(anchorElementi);

    const handleClose = () => {
        setAnchorElementi(null);
    };

    const handleClick = (event) => {
        setAnchorElementi(event.currentTarget);
    };

    const handleOpenLogin = () => {
        setOpenLogin(true);
        handleClose(); 
    };

    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='logo'
                >
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    POKEMON APP
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Home</Button>
                    <Button color='inherit'>Products</Button>
                    <Button
                        color='inherit'
                        id='resources-button'
                        onClick={handleClick}
                        aria-controls={hapur ? 'resources-menu' : undefined}
                        aria-expanded={hapur ? 'true' : undefined}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Resources
                    </Button>
                    <Button color='inherit'>About</Button>
                    <Button onClick = {handleLoginClick}color='inherit'>Login</Button>
                </Stack>
                <Menu
                    id='resources-menu'
                    anchorEl={anchorElementi}
                    open={hapur}
                    MenuListProps={{
                        'aria-labelledby': 'resources-button'
                    }}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default MuiNavbar;