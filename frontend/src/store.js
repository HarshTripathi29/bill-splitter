import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import groupReducer from './features/group/groupSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        group: groupReducer,
    },
});
