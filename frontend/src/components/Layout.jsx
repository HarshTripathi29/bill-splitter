import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 ml-60 p-4 bg-white">
                {children}
            </div>
        </div>
    );
};

export default Layout;
