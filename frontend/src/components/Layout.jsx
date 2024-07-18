import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 p-4 ml-5 bg-white">
                {children}
            </div>
        </div>
    );
};

export default Layout;
