import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import groupReducer from './features/group/groupSlice';
import authReducer from './features/auth/authSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        group: groupReducer,
    },
});
