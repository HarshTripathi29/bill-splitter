import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Splitwise Clone
                </Typography>
                <Button color="inherit" onClick={() => navigate('/')}>Dashboard</Button>
                <Button color="inherit" onClick={() => navigate('/groups')}>Groups</Button>
                <Button color="inherit" onClick={() => navigate('/create-group')}>Create Group</Button>
                <Button color="inherit" onClick={() => navigate('/about')}>About</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
