import React from 'react';

const About = () => {
    return (
        <div className="mt-4 px-4 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">Splitter</h1>
            <h2 className="text-2xl mb-2">Build with the MERN stack (MongoDB, Express, React, and NodeJS).</h2>

            <div className="mb-4">
                <p className="text-base mb-2">© Harsh Tripathi</p>
                <p className="text-base mb-2">
                    <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">GitHub</a> | 
                    <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600"> Report Bug</a> | 
                    <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600"> Request Feature</a>
                </p>
            </div>

            <h2 className="text-3xl font-bold mb-2">Splitter</h2>
            <h2 className="text-2xl mb-2">MERN Stack Group Expense Splitting Application</h2>

            <hr className="border-gray-300 mb-4" />

            <h2 className="text-2xl mb-2">Introduction</h2>
            <p className="text-base mb-4">
                This project is a passion-driven endeavor I've been developing in my free time: an expense splitting application built using the MERN stack (MongoDB, Express, React, and Node.js). Designed initially to facilitate the splitting of group expenses among friends, this app's functionality is broad enough to accommodate various business requirements.

                With this app, you can easily log your expenses and gain insights through detailed analytics such as Group Balance, Monthly Spending, and Category-wise Expense Graphs. You can dive straight into the Live App to begin tracking your expenses or download the complete source code to host it on your own server.

                Given that this is a side project, there may be occasional issues or bugs. Your feedback is invaluable, and I would greatly appreciate it if you could report any problems you encounter.
            </p>

            <h2 className="text-2xl mb-2">Features</h2>
            <ul className="list-disc pl-5 mb-4">
                <li>Create user groups and track group expenses</li>
                <li>Keep track of shared expenses and settle your corresponding balances in a convenient and personalized way.</li>
                <li>Get Analytical graphs to understand your expenditure trend</li>
                <li>Multiple user registration.</li>
                <li>Authentication using JSON web token (JWT)</li>
            </ul>

            <h2 className="text-2xl mb-2">Technologies used</h2>
            <h3 className="text-xl mb-2">Frontend</h3>
            <ul className="list-disc pl-5 mb-4">
                <li>React JS</li>
                <li>Redux (for managing and centralizing application state)</li>
                <li>Axios (for making API calls)</li>
                <li>Material UI (for User Interface)</li>
                <li>Chart.js (To display various analytics graphs)</li>
                <li>React-chartjs-2</li>
                <li>Gravatar (for user profile picture)</li>
            </ul>

            <h3 className="text-xl mb-2">Backend</h3>
            <ul className="list-disc pl-5 mb-4">
                <li>Express</li>
                <li>Mongoose</li>
                <li>JWT (For authentication)</li>
                <li>bcryptjs (for data encryption)</li>
            </ul>

            <h3 className="text-xl mb-2">Database</h3>
            <ul className="list-disc pl-5 mb-4">
                <li>MongoDB (MongoDB Atlas)</li>
            </ul>

            <div className="mt-4 text-center">
                <p className="text-base">© Harsh Tripathi</p>
                <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">GitHub</a>
            </div>
        </div>
    );
};

export default About;
