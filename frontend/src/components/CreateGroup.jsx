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
    const groupState = useSelector(state => state.group);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const membersArray = formData.members.split(',').map(member => member.trim());
        dispatch(createGroup({ ...formData, members: membersArray }));
    };

    return (
        <Container>
            <Typography variant="h4">Create Group</Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    label="Group Name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField
                    label="Group Description"
                    name="description"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.description}
                    onChange={handleChange}
                />
                <TextField
                    label="Group Members (comma separated emails)"
                    name="members"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.members}
                    onChange={handleChange}
                />
                <TextField
                    label="Currency"
                    name="currency"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.currency}
                    onChange={handleChange}
                />
                <TextField
                    label="Category"
                    name="category"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.category}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Create
                </Button>
            </Box>
            {groupState.status === 'loading' && <Typography>Creating group...</Typography>}
            {groupState.status === 'succeeded' && <Typography>Group created successfully!</Typography>}
            {groupState.status === 'failed' && <Typography>Error: {groupState.error}</Typography>}
        </Container>
    );
};

export default CreateGroup;
