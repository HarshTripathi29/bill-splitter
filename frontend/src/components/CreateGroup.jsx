import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createGroup } from '../features/group/groupSlice';
import { TextField, Button, Container, Typography, Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CreateGroup = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        members: [''],
        currency: '',
        category: '',
    });

    const dispatch = useDispatch();
    const groupState = useSelector((state) => state.group);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('member-')) {
            const index = parseInt(name.split('-')[1], 10);
            const updatedMembers = [...formData.members];
            updatedMembers[index] = value;
            setFormData({ ...formData, members: updatedMembers });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleAddMember = () => {
        setFormData({ ...formData, members: [...formData.members, ''] });
    };

    const handleRemoveMember = (index) => {
        const updatedMembers = formData.members.filter((_, i) => i !== index);
        setFormData({ ...formData, members: updatedMembers });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const membersArray = formData.members.map((member) => member.trim()).filter((member) => member !== '');
        dispatch(createGroup({ ...formData, members: membersArray }));
    };

    return (
        <Container sx={{ mt: 4, width: '60vw' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'left', color: '#2c3e50', mb: 1 }}>
                Create Group
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                    mt: 1,
                    backgroundColor: '#fff',
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
                {formData.members.map((member, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <TextField
                            label={`Member ${index + 1}`}
                            name={`member-${index}`}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={member}
                            onChange={handleChange}
                            sx={{ backgroundColor: '#ffffff', borderRadius: '4px', width: '50vw' }}
                        />
                        <IconButton onClick={() => handleRemoveMember(index)} sx={{ ml: 1, border: '2px solid red', borderRadius: '4px', padding: 2 }}>
                            <RemoveIcon sx={{ color: '#e74c3c' }} />
                        </IconButton>
                    </Box>
                ))}
                <Button
                    variant="contained"
                    onClick={handleAddMember}
                    sx={{ mb: 2, backgroundColor: '#3498db', '&:hover': { backgroundColor: '#2980b9' } }}
                >
                    <AddIcon />
                    Add Member
                </Button>
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
                  </Container>
    );
};

export default CreateGroup;
