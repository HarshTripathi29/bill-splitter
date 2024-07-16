import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                    backgroundColor: '#2c3e50',
                    color: '#ecf0f1',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <List>
                    <ListItem>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Splitwise Clone
                        </Typography>
                    </ListItem>
                    <ListItem button onClick={() => navigate('/')} sx={{ '&:hover': { backgroundColor: '#34495e' } }}>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button onClick={() => navigate('/groups')} sx={{ '&:hover': { backgroundColor: '#34495e' } }}>
                        <ListItemText primary="Groups" />
                    </ListItem>
                    <ListItem button onClick={() => navigate('/create-group')} sx={{ '&:hover': { backgroundColor: '#34495e' } }}>
                        <ListItemText primary="Create Group" />
                    </ListItem>
                    <ListItem button onClick={() => navigate('/about')} sx={{ '&:hover': { backgroundColor: '#34495e' } }}>
                        <ListItemText primary="About" />
                    </ListItem>
                </List>
                <Box p={2}>
                    <Typography variant="body2" color="inherit">
                        &copy; 2024 Splitwise Clone
                    </Typography>
                </Box>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
