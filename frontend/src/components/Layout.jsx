import React from 'react';
import Header from './Header';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div>
            <CssBaseline />
            <Sidebar />
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, marginLeft: '240px' }}
            >
                {children}
            </Box>
        </div>
    );
};

export default Layout;
