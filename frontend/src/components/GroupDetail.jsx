import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGroupDetails } from '../features/group/groupSlice';
import { Container, Typography, Box, Grid } from '@mui/material';
import CategoryExpenseChart from './CategoryExpenseChart';

const GroupDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const group = useSelector(state => state.group.selectedGroup);
    const expenses = useSelector(state => state.group.expenses);
    const members = group ? group.members : [];
    const status = useSelector(state => state.group.status);
    const error = useSelector(state => state.group.error);

    useEffect(() => {
        dispatch(fetchGroupDetails(id));
    }, [dispatch, id]);

    // Function to calculate per person split amount
    const calculatePerPersonAmount = (totalAmount) => {
        const numMembers = members.length;
        if (numMembers === 0) return 0;
        return totalAmount / numMembers;
    };

    // Aggregate expense data by category
    const expenseData = expenses.reduce((acc, expense) => {
        if (acc[expense.category]) {
            acc[expense.category] += expense.totalAmount;
        } else {
            acc[expense.category] = expense.totalAmount;
        }
        return acc;
    }, {});

    return (
        <Container sx={{ mt: 4 }}>
            {status === 'loading' && <Typography sx={{ textAlign: 'center', color: '#e74c3c' }}>Loading...</Typography>}
            {status === 'failed' && <Typography sx={{ textAlign: 'center', color: '#e74c3c' }}>Error: {error}</Typography>}
            {!group && <Typography>No group found</Typography>}
            {group && (
                <>
                    <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: '12px', mb: 2, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#34495e', mb: 1 }}>{group.name}</Typography>
                        <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 1 }}>{group.description}</Typography>
                        <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 1 }}>Members: {members.join(', ')}</Typography>
                        <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 1 }}>Currency: {group.currency}</Typography>
                        <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 1 }}>Category: {group.category}</Typography>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={3}>
                                {expenses.map(expense => (
                                    <Grid item key={expense._id} xs={12}>
                                        <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', position: 'relative' }}>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#34495e', mb: 1 }}>{expense.category}</Typography>
                                            <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 1 }}>Total Amount: {expense.totalAmount}</Typography>
                                            <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 1 }}>Paid By: {expense.paidBy}</Typography>
                                            <Typography variant="body2" sx={{ color: '#3498db', mb: 1 }}>Per Person: {calculatePerPersonAmount(expense.totalAmount)}</Typography>
                                            <Box sx={{ position: 'absolute', top: '10px', right: '10px', width: '50px', height: '50px', bgcolor: '#3498db', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{new Date(expense.date).toLocaleDateString()}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CategoryExpenseChart expenseData={expenseData} />
                            </Box>
                        </Grid>
                    </Grid>
                </>
            )}
        </Container>
    );
};

export default GroupDetail;
