import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GroupCard from './GroupCard';
import { fetchGroups, fetchFavorites } from '../features/group/groupSlice';

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favoriteGroups = useSelector((state) => state.group.favorites);
    const groups = useSelector((state) => state.group.groups);

    useEffect(() => {
        dispatch(fetchGroups());
        dispatch(fetchFavorites());
    }, [dispatch]);

    const favoriteGroupsList = groups.filter(group => favoriteGroups.includes(group._id));

    return (
        <div className="mt-1 p-2">
            <div className="flex flex-col space-y-4">
                <div className="bg-white w-4/5 rounded-xl border border-cyan-200 shadow-md hover:shadow-lg flex flex-row justify-between items-center p-4">
                    <div className="flex-1 mr-1">
                        <div className="text-left w-5/6 bg-cyan-950 p-2 rounded-lg">
                            <h2 className="text-2xl font-bold text-cyan-100">Hello there, Welcome back</h2>
                            <p className="text-cyan-200 mt-2">Keep track of shared expenses and settle your corresponding balances in a convenient and personalized way.</p>
                            <h3 className="text-2xl font-bold text-cyan-200">Split bills not friendships</h3>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => navigate('/groups')}
                                sx={{
                                    mt: 2,
                                    backgroundColor: '#2980b9',
                                    '&:hover': {
                                        backgroundColor: '#34d399',
                                    },
                                }}
                            >
                                View Groups
                            </Button>
                        </div>
                    </div>
                    <img src="https://illustrations.popsy.co/sky/communication.svg" 
                        alt="Communication" 
                        className="w-48 h-auto" />
                </div>
                <div className="bg-cyan-950 rounded-xl p-4 text-left w-4/5">
                    <h3 className="text-xl font-bold text-cyan-100">Total Balance</h3>
                    <p className="text-cyan-400 mt-2">$0.00</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
