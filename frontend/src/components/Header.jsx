import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="bg-cyan-950 shadow-md hover:shadow-lg">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-2xl font-bold text-[#ecf0f1]">
                    Splitter
                </div>
                <div className="flex space-x-4">
                    <button
                        onClick={() => navigate('/login')}
                        className="text-[#ecf0f1] hover:bg-cyan-800 px-4 py-2 rounded transition"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => navigate('/register')}
                        className="text-[#ecf0f1] hover:bg-cyan-800 px-4 py-2 rounded transition"
                    >
                        Signup
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
