import React from 'react';
import Header from './Header';
import { Container } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Container>
                {children}
            </Container>
        </div>
    );
};

export default Layout;
