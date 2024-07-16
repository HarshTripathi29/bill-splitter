import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#2c3e50',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                '&:hover': {
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                },
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        fontWeight: 'bold',
                        color: '#ecf0f1',
                    }}
                >
                    Splitwise Clone
                </Typography>
                <Button
                    color="inherit"
                    onClick={() => navigate('/')}
                    sx={{
                        color: '#ecf0f1',
                        '&:hover': {
                            backgroundColor: '#34495e',
                        },
                    }}
                >
                    Dashboard
                </Button>
                <Button
                    color="inherit"
                    onClick={() => navigate('/groups')}
                    sx={{
                        color: '#ecf0f1',
                        '&:hover': {
                            backgroundColor: '#34495e',
                        },
                    }}
                >
                    Groups
                </Button>
                <Button
                    color="inherit"
                    onClick={() => navigate('/create-group')}
                    sx={{
                        color: '#ecf0f1',
                        '&:hover': {
                            backgroundColor: '#34495e',
                        },
                    }}
                >
                    Create Group
                </Button>
                <Button
                    color="inherit"
                    onClick={() => navigate('/about')}
                    sx={{
                        color: '#ecf0f1',
                        '&:hover': {
                            backgroundColor: '#34495e',
                        },
                    }}
                >
                    About
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
