// Add the following imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addFavorite = createAsyncThunk('group/addFavorite', async (groupId, { getState }) => {
    const state = getState();
    const { token } = state.user;
    const response = await axios.post('http://localhost:5000/api/users/favorites', { groupId }, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
});

export const fetchFavorites = createAsyncThunk('group/fetchFavorites', async (_, { getState }) => {
    const state = getState();
    const { token } = state.user;
    const response = await axios.get('http://localhost:5000/api/users/favorites', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
});

// Modify the initialState to include favorites
const groupSlice = createSlice({
    name: 'group',
    initialState: {
        groups: [],
        selectedGroup: null,
        favorites: [],
        expenses: [],
        status: 'idle',
        error: null,
    },

    reducers: {
        // Remove toggleFavoriteGroup reducer if it exists
    },
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
            })
            .addCase(updateExpense.fulfilled, (state, action) => {
                const index = state.selectedGroup.expenses.findIndex(expense => expense._id === action.payload._id);
                if (index !== -1) {
                    state.selectedGroup.expenses[index] = action.payload;
                }
            })
            .addCase(deleteExpense.fulfilled, (state, action) => {
                state.selectedGroup.expenses = state.selectedGroup.expenses.filter(expense => expense._id !== action.payload.expenseId);
            })
            .addCase(addFavorite.fulfilled, (state, action) => {
                state.favorites = action.payload.favorites; // Update favorites from response
            })
            .addCase(fetchFavorites.fulfilled, (state, action) => {
                state.favorites = action.payload;
            });
    },
});

export const { } = groupSlice.actions; // Remove toggleFavoriteGroup action
export default groupSlice.reducer;
