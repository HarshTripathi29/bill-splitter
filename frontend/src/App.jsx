import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
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
import { setUser } from './features/auth/authSlice';
import './index.css';

const AppContent = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const status = useSelector(state => state.auth.status);

    useEffect(() => {
        // Simulating fetching user data (e.g., from an API or local storage)
        const fetchedUser = {
            id: 'user-id-123',
            name: 'John Doe',
        };

        dispatch(setUser(fetchedUser));
    }, [dispatch]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    return (
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
    );
};

const App = () => {
    return (
        <Provider store={store}>
            <AppContent />
        </Provider>
    );
};

export default App;
