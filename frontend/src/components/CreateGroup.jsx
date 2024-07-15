import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const CreateGroup = () => {
    return (
        <Container>
            <Typography variant="h4">Create Group</Typography>
            <form>
                <TextField
                    label="Group Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Group Members"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Create
                </Button>
            </form>
        </Container>
    );
};

export default CreateGroup;
