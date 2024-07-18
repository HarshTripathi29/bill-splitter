import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GroupCard from './GroupCard';

const Dashboard = () => {
    const navigate = useNavigate();
    const favoriteGroups = useSelector((state) => state.group.favorites); // Select favorites from state
    const groups = useSelector((state) => state.group.groups);

    // Filter groups to get only the favorite ones
    const favoriteGroupsList = groups.filter(group => favoriteGroups.includes(group._id));

    return (
        <div className="mt-4 p-2">
            <div className="flex flex-col space-y-4">
                <div className="bg-cyan-50 w-4/5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg flex flex-row justify-between items-center p-4">
                    <div className="flex-1 mr-1">
                        <div className="text-left w-5/6 bg-white p-2 rounded-lg">
                            <h2 className="text-2xl font-bold text-cyan-900">Hello there, Welcome back</h2>
                            <p className="text-cyan-800 mt-2">Keep track of shared expenses and settle your corresponding balances in a convenient and personalized way.</p>
                            <h3 className="text-2xl font-bold text-cyan-800">Split bills not friendships</h3>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => navigate('/groups')}
                                sx={{
                                    mt: 2,
                                  
                                    backgroundColor: '#2980b9',
                                    '&:hover': {
                                        backgroundColor: '#3498db',
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

                <div className="bg-cyan-200 rounded-xl p-4 text-left w-4/5">
                    <h3 className="text-xl font-bold text-gray-800">Total Balance</h3>
                    <p className="text-gray-600 mt-2">$0.00</p>
                </div>

                <div className="bg-white rounded-xl border w-4/5 border-gray-200 shadow-md hover:shadow-lg p-4 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Favourite Groups</h3>
                    {favoriteGroupsList.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                            {favoriteGroupsList.map((group) => (
                                <GroupCard
                                    key={group._id}
                                    group={group}
                                    onAddExpense={() => navigate(`/groups/${group._id}`)} // Navigate to group details
                                    onToggleFavorite={() => {}} // Optional: You can handle favorite toggle here if needed
                                    isFavorite={true} // All displayed groups are favorites
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600 mt-2">No favorite groups yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
