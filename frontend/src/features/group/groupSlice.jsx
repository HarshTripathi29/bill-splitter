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

export const addExpense = createAsyncThunk(
    'group/addExpense',
    async (expenseData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/groups/${expenseData.groupId}/addExpense`, expenseData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const settleUp = createAsyncThunk(
    'group/settleUp',
    async (groupId, { rejectWithValue }) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/groups/${groupId}/settleUp`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchGroupDetails = createAsyncThunk(
    'group/fetchGroupDetails',
    async (groupId) => {
        const response = await axios.get(`http://localhost:5000/api/groups/${groupId}`);
        return response.data;
    }
);


const groupSlice = createSlice({
    name: 'group',
    initialState: {
        groups: [],
        selectedGroup: null,
        expenses: [],
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
            })
            .addCase(addExpense.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addExpense.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Assuming the API returns the updated group data with expenses
                const updatedGroup = action.payload;
                const index = state.groups.findIndex(group => group._id === updatedGroup._id);
                if (index !== -1) {
                    state.groups[index] = updatedGroup;
                }
            })
            .addCase(addExpense.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(settleUp.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(settleUp.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Update group state if necessary after settling up
            })
            .addCase(settleUp.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchGroupDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGroupDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.selectedGroup = action.payload.group;
                state.expenses = action.payload.expenses;
            })
            .addCase(fetchGroupDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default groupSlice.reducer;
