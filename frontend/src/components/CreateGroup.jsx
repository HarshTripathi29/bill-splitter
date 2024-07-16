import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createGroup } from '../features/group/groupSlice';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const CreateGroup = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        members: '',
        currency: '',
        category: '',
    });

    const dispatch = useDispatch();
    const groupState = useSelector((state) => state.group);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const membersArray = formData.members.split(',').map((member) => member.trim());
        dispatch(createGroup({ ...formData, members: membersArray }));
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#2c3e50', mb: 4 }}>
                Create Group
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                    mt: 1,
                    p: 4,
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    backgroundColor: '#ecf0f1',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    '&:hover': {
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                    },
                }}
            >
                <TextField
                    label="Group Name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                />
                <TextField
                    label="Group Description"
                    name="description"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.description}
                    onChange={handleChange}
                    sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                />
                <TextField
                    label="Group Members (comma separated emails)"
                    name="members"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.members}
                    onChange={handleChange}
                    sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                />
                <TextField
                    label="Currency"
                    name="currency"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.currency}
                    onChange={handleChange}
                    sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                />
                <TextField
                    label="Category"
                    name="category"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.category}
                    onChange={handleChange}
                    sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                />
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
                    Create
                </Button>
            </Box>
            {groupState.status === 'loading' && <Typography sx={{ mt: 2, textAlign: 'center', color: '#e74c3c' }}>Creating group...</Typography>}
            {groupState.status === 'succeeded' && <Typography sx={{ mt: 2, textAlign: 'center', color: '#27ae60' }}>Group created successfully!</Typography>}
            {groupState.status === 'failed' && <Typography sx={{ mt: 2, textAlign: 'center', color: '#e74c3c' }}>Error: {groupState.error}</Typography>}
        </Container>
    );
};

export default CreateGroup;
