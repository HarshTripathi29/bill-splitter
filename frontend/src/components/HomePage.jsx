import React from 'react';
import { Button } from '@mui/material';
import Header from './Header';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import '../App.css'

const HomePage = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-[90vh] text-center bg-white">
                <div className="text-6xl font-bold text-cyan-900">
                    Split Bills, not Friendships
                </div>
                <img
                    src="https://illustrations.popsy.co/sky/romantic-dinner.svg"
                    alt="Hero"
                    className="w-full max-w-[400px] h-auto mb-1"
                />
                <div className="text-xl text-cyan-950 mb-2">
                    Keep track of shared expenses, split bills with friends, and manage your finances effortlessly.
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        backgroundColor: '#082f49',
                        '&:hover': {
                            backgroundColor: '#075985',
                        },
                        paddingX: 2,
                        paddingY: 1,
                        borderRadius: '8px',
                        fontSize: '1rem',
                    }}
                    href="/dashboard"
                >
                    Get Started
                </Button>
            </div>
            <div className="flex flex-col items-center mt-12">
                <div className="text-4xl font-bold text-cyan-900 m-8">Here's how you do it!</div>
                <div className="steps-list relative">
                    <ul className="list-none p-0">
                        <li className="step-item flex items-center mb-8">
                            <div className="step-number bg-cyan-900 text-white rounded-full h-12 w-12 flex items-center justify-center mr-4">
                                1
                            </div>
                            <div className="text-lg border border-cyan-900 p-3 rounded-tl-lg rounded-br-lg">Sign up and create an account</div>
                        </li>
                        <li className="step-item flex items-center mb-8">
                            <div className="step-number bg-cyan-900 text-white rounded-full h-12 w-12 flex items-center justify-center mr-4">
                                2
                            </div>
                            <div className="text-lg  border border-cyan-900 p-3 rounded-tl-lg rounded-br-lg">Create a group and invite friends</div>
                        </li>
                        <li className="step-item flex items-center mb-8">
                            <div className="step-number bg-cyan-900 text-white rounded-full h-12 w-12 flex items-center justify-center mr-4">
                                3
                            </div>
                            <div className="text-lg  border border-cyan-900 p-3 rounded-tl-lg rounded-br-lg">Add expenses and split bills</div>
                        </li>
                        <li className="step-item flex items-center mb-8">
                            <div className="step-number bg-cyan-900 text-white rounded-full h-12 w-12 flex items-center justify-center mr-4">
                                4
                            </div>
                            <div className="text-lg  border border-cyan-900 p-3 rounded-tl-lg rounded-br-lg">Settle balances with friends</div>
                        </li>
                        <li className="step-item flex items-center mb-8">
                            <div className="step-number bg-cyan-900 text-white rounded-full h-12 w-12 flex items-center justify-center mr-4">
                                5
                            </div>
                            <div className="text-lg  border border-cyan-900 p-3 rounded-tl-lg rounded-br-lg">Track expenses and get insights</div>
                        </li>
                    </ul>
                    <div className="absolute top-0 left-6 h-full w-1 bg-cyan-900 thread"></div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-12">
                <div className="text-4xl font-bold text-cyan-900 m-8 p-8">Features</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl">
                    <div className="feature-card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="feature-icon text-cyan-900 text-4xl mb-4">💳</div>
                        <div className="feature-title text-2xl font-bold mb-2">Easy Expense Tracking</div>
                        <div className="feature-description text-gray-700">
                            Keep track of shared expenses with friends and family effortlessly.
                        </div>
                    </div>
                    <div className="feature-card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="feature-icon text-cyan-900 text-4xl mb-4">📊</div>
                        <div className="feature-title text-2xl font-bold mb-2">Expense Insights</div>
                        <div className="feature-description text-gray-700">
                            Get detailed insights on your expenses and spending patterns.
                        </div>
                    </div>
                    <div className="feature-card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="feature-icon text-cyan-900 text-4xl mb-4">👥</div>
                        <div className="feature-title text-2xl font-bold mb-2">Group Management</div>
                        <div className="feature-description text-gray-700">
                            Create groups and manage shared expenses with ease.
                        </div>
                    </div>
                    <div className="feature-card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="feature-icon text-cyan-900 text-4xl mb-4">🔔</div>
                        <div className="feature-title text-2xl font-bold mb-2">Notifications</div>
                        <div className="feature-description text-gray-700">
                            Receive notifications for new expenses and settlements.
                        </div>
                    </div>
                    <div className="feature-card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="feature-icon text-cyan-900 text-4xl mb-4">📱</div>
                        <div className="feature-title text-2xl font-bold mb-2">Mobile Friendly</div>
                        <div className="feature-description text-gray-700">
                            Access and manage your expenses on the go with our mobile-friendly design.
                        </div>
                    </div>
                    <div className="feature-card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="feature-icon text-cyan-900 text-4xl mb-4">🔒</div>
                        <div className="feature-title text-2xl font-bold mb-2">Secure</div>
                        <div className="feature-description text-gray-700">
                            Your data is safe and secure with our robust security measures.
                        </div>
                    </div>
                </div>
            </div>
            <footer className="flex justify-center items-center mt-12 p-4 bg-cyan-900 text-white">
                <DeveloperModeIcon sx={{ mr: 1 }} />
                Developed by Harsh Tripathi
            </footer>
        </div>
    );
};

export default HomePage;
