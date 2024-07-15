import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createGroup = createAsyncThunk(
    'group/createGroup',
    async (groupData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/groups/create', groupData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchGroups = createAsyncThunk(
    'group/fetchGroups',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:5000/api/groups');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const groupSlice = createSlice({
    name: 'group',
    initialState: {
        groups: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createGroup.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createGroup.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.groups.push(action.payload);
            })
            .addCase(createGroup.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchGroups.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGroups.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.groups = action.payload;
            })
            .addCase(fetchGroups.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default groupSlice.reducer;
