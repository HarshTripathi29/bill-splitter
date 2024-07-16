import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import { fetchGroups } from '../features/group/groupSlice';
import AddExpenseModal from './AddExpenseModal';

const Groups = () => {
    const dispatch = useDispatch();
    const groups = useSelector((state) => state.group.groups);
    const groupStatus = useSelector((state) => state.group.status);
    const error = useSelector((state) => state.group.error);
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(null);

    useEffect(() => {
        if (groupStatus === 'idle') {
            dispatch(fetchGroups());
        }
    }, [groupStatus, dispatch]);

    const handleOpenAddExpenseModal = (group) => {
        setSelectedGroup(group);
        setShowAddExpenseModal(true);
    };

    const handleCloseAddExpenseModal = () => {
        setShowAddExpenseModal(false);
        setSelectedGroup(null);
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#2c3e50' }}>
                Groups
            </Typography>
            {groupStatus === 'loading' && <Typography sx={{ textAlign: 'center', color: '#e74c3c' }}>Loading...</Typography>}
            {groupStatus === 'failed' && <Typography sx={{ textAlign: 'center', color: '#e74c3c' }}>Error: {error}</Typography>}
            <Grid container spacing={4}>
                {groups.map((group) => (
                    <Grid item key={group._id} xs={12} md={6} lg={4}>
                        <Box
                            sx={{
                                p: 3,
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                backgroundColor: '#ecf0f1',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                '&:hover': {
                                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                                },
                            }}
                        >
                            <Link to={`/groups/${group._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#34495e' }}>
                                    {group.name}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1, color: '#7f8c8d' }}>
                                    {group.description}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1, color: '#7f8c8d' }}>
                                    Members: {group.members.join(', ')}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1, color: '#7f8c8d' }}>
                                    Currency: {group.currency}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1, color: '#7f8c8d' }}>
                                    Category: {group.category}
                                </Typography>
                            </Link>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleOpenAddExpenseModal(group)}
                                sx={{
                                    mt: 2,
                                    backgroundColor: '#2980b9',
                                    '&:hover': {
                                        backgroundColor: '#3498db',
                                    },
                                }}
                            >
                                Add Expense
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Add Expense Modal */}
            <AddExpenseModal
                groupId={selectedGroup ? selectedGroup._id : null}
                open={showAddExpenseModal}
                onClose={handleCloseAddExpenseModal}
            />
        </Container>
    );
};

export default Groups;
