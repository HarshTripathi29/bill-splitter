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

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/login" element={<UserLogin />} />
                    <Route path="/register" element={<UserRegister />} />
                    <Route path="/" element={<Layout><Dashboard /></Layout>} />
                    <Route path="/groups" element={<Layout><Groups /></Layout>} />
                    <Route path="/create-group" element={<Layout><CreateGroup /></Layout>} />
                    <Route path="/about" element={<Layout><About /></Layout>} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
