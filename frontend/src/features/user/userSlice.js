import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('user/login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password }, config);
        localStorage.setItem('userInfo', JSON.stringify(data));
        return data;
    } catch (error) {
        return rejectWithValue(error.response && error.response.data.message ? error.response.data.message : error.message);
    }
});

export const register = createAsyncThunk('user/register', async ({ name, email, password }, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.post('http://localhost:5000/api/users/register', { name, email, password }, config);
        localStorage.setItem('userInfo', JSON.stringify(data));
        return data;
    } catch (error) {
        return rejectWithValue(error.response && error.response.data.message ? error.response.data.message : error.message);
    }
});

export const addFavorite = createAsyncThunk('group/addFavorite', async (groupId, { getState }) => {
    const state = getState();
    const { token } = state.user;
    const response = await axios.post('/api/users/favorites', { groupId }, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
});

// Fetch favorite groups
export const fetchFavorites = createAsyncThunk('group/fetchFavorites', async (_, { getState }) => {
    const state = getState();
    const { token } = state.user;
    const response = await axios.get('/api/users/favorites', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userInfo');
            state.userInfo = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
            
           
    },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
