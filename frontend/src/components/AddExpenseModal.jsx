import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Box, Typography, TextField, Button, Grid, MenuItem } from '@mui/material';
import { addExpense, updateExpense } from '../features/group/groupSlice';

const AddExpenseModal = ({ groupId, expense, open, onClose }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        category: '',
        totalAmount: '',
        paidBy: '',
    });

    useEffect(() => {
        if (expense) {
            setFormData({
                category: expense.category,
                totalAmount: expense.totalAmount,
                paidBy: expense.paidBy,
            });
        } else {
            setFormData({
                category: '',
                totalAmount: '',
                paidBy: '',
            });
        }
    }, [expense]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (expense) {
            dispatch(updateExpense({ groupId, expenseId: expense._id, ...formData }));
        } else {
            dispatch(addExpense({ groupId, ...formData }));
        }
        onClose(); // Close modal after submitting
    };

    const handleClose = () => {
        onClose(); // Close modal without submitting
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="add-expense-modal"
            aria-describedby="add-expense-form"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    p: 4,
                    borderRadius: '12px',
                }}
            >
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#2c3e50', fontWeight: 'bold' }}>
                    {expense ? 'Edit Expense' : 'Add Expense'}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                select
                                fullWidth
                                label="Expense Category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                            >
                                {['Entertainment', 'Shopping', 'Food and Drink', 'Home', 'Transport', 'Others'].map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Total Amount"
                                type="number"
                                name="totalAmount"
                                value={formData.totalAmount}
                                onChange={handleChange}
                                required
                                sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Paid By"
                                name="paidBy"
                                value={formData.paidBy}
                                onChange={handleChange}
                                required
                                sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{
                                    mt: 3,
                                    backgroundColor: '#2980b9',
                                    '&:hover': {
                                        backgroundColor: '#3498db',
                                    },
                                }}
                            >
                                {expense ? 'Update Expense' : 'Add Expense'}
                            </Button>
                            <Button
                                onClick={handleClose}
                                sx={{
                                    mt: 3,
                                    ml: 2,
                                    color: '#7f8c8d',
                                    '&:hover': {
                                        color: '#2c3e50',
                                    },
                                }}
                            >
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Modal>
    );
};

export default AddExpenseModal;
