import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Box, Typography, TextField, Button, Grid, Select, MenuItem } from '@mui/material';
import { addExpense } from '../features/group/groupSlice';

const AddExpenseModal = ({ groupId, open, onClose }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        category: '',
        totalAmount: '',
        paidBy: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addExpense({ groupId, ...formData }));
        setFormData({
            category: '',
            totalAmount: '',
            paidBy: '',
        });
        onClose(); // Close modal after submitting
    };

    const handleClose = () => {
        setFormData({
            category: '',
            totalAmount: '',
            paidBy: '',
        });
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
                    Add Expense
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
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
                        <Grid item xs={12} sm={6}>
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
                            <Select
                                fullWidth
                                label="Expense Category"
                                value={formData.category}
                                onChange={handleChange}
                                name="category"
                                required
                                sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                            >
                                <MenuItem value="Entertainment">Entertainment</MenuItem>
                                <MenuItem value="Shopping">Shopping</MenuItem>
                                <MenuItem value="Food and Drink">Food and Drink</MenuItem>
                                <MenuItem value="Home">Home</MenuItem>
                                <MenuItem value="Transport">Transport</MenuItem>
                                <MenuItem value="Others">Others</MenuItem>
                            </Select>
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
                                Add Expense
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
