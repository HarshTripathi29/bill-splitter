import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';
import Dashboard from './components/Dashboard';
import Groups from './components/Groups';
import CreateGroup from './components/CreateGroup';
import About from './components/About';
import GroupDetail from './components/GroupDetail';
import HomePage from './components/HomePage';
import './index.css';



const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/register" element={<UserRegister />} />
                    <Route path="/login" element={<UserLogin />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
                    <Route path="/groups" element={<Layout><Groups /></Layout>} />
                    <Route path="/create-group" element={<Layout><CreateGroup /></Layout>} />
                    <Route path="/about" element={<Layout><About /></Layout>} />
                    <Route path="/groups/:id" element={<Layout><GroupDetail /></Layout>} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
