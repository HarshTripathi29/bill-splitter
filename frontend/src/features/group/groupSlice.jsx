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

export const updateExpense = createAsyncThunk('group/updateExpense', async ({ groupId, expenseId, category, totalAmount, paidBy }) => {
    const response = await axios.put(`/api/groups/${groupId}/expenses/${expenseId}`, { category, totalAmount, paidBy });
    return response.data;
});

export const deleteExpense = createAsyncThunk('group/deleteExpense', async ({ groupId, expenseId }) => {
    await axios.delete(`/api/groups/${groupId}/expenses/${expenseId}`);
    return { expenseId };
});


export const addFavorite = createAsyncThunk('group/addFavorite', async (groupId, { getState }) => {
    const state = getState();
    const { token } = state.user;
    const response = await axios.post('http://localhost:5000/api/users/favorites', { groupId }, {
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

const groupSlice = createSlice({
    name: 'group',
    initialState: {
        groups: [],
        selectedGroup: null,
        favorites: [], // Add this line
        expenses: [],
        status: 'idle',
        error: null,
    },

    reducers: {
        toggleFavoriteGroup: (state, action) => {
            const groupId = action.payload;
            if (state.favorites.includes(groupId)) {
                state.favorites = state.favorites.filter(id => id !== groupId);
            } else {
                state.favorites.push(groupId);
            }
        },
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
                state.favorites.push(action.meta.arg);
            });
         
    },
});

export const { toggleFavoriteGroup } = groupSlice.actions;
export default groupSlice.reducer;
