import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../features/user/userSlice';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <div className="w-60 h-full bg-cyan-950 text-gray-200 flex flex-col justify-between fixed">
            <div className="p-4">
                <h1 className="text-2xl font-bold m-4 mt-1">Splitter</h1>
                <ul className="space-y-4">
                    <li>
                        <div 
                            className="w-full text-left px-4 py-2 rounded-lg hover:bg-cyan-800 cursor-pointer" 
                            onClick={() => navigate('/dashboard')}
                        >
                            Dashboard
                        </div>
                    </li>
                    <li>
                        <div 
                            className="w-full text-left px-4 py-2 rounded-lg hover:bg-cyan-800 cursor-pointer" 
                            onClick={() => navigate('/groups')}
                        >
                            Groups
                        </div>
                    </li>
                    <li>
                        <div 
                            className="w-full text-left px-4 py-2 rounded-lg hover:bg-cyan-800 cursor-pointer" 
                            onClick={() => navigate('/create-group')}
                        >
                            Create Group
                        </div>
                    </li>
                    <li>
                        <div 
                            className="w-full text-left px-4 py-2 rounded-lg hover:bg-cyan-800 cursor-pointer" 
                            onClick={() => navigate('/about')}
                        >
                            About
                        </div>
                    </li>
                </ul>
            </div>
            <div className="p-4">
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleLogout}
                    startIcon={<ExitToAppIcon />}
                    sx={{
                        backgroundColor: '#e74c3c',
                        width : '15vw',
                        '&:hover': {
                            backgroundColor: '#c0392b',
                        },
                    }}
                >
                    Logout
                </Button>
                <p className="mt-4 text-xs text-center">&copy; 2024 Splitter</p>
            </div>
        </div>
    );
};

export default Sidebar;
