import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups } from '../features/group/groupSlice';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

const Groups = () => {
    const dispatch = useDispatch();
    const groups = useSelector(state => state.group.groups);
    const groupStatus = useSelector(state => state.group.status);
    const error = useSelector(state => state.group.error);

    useEffect(() => {
        if (groupStatus === 'idle') {
            dispatch(fetchGroups());
        }
    }, [groupStatus, dispatch]);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Groups
            </Typography>
            {groupStatus === 'loading' && <Typography>Loading...</Typography>}
            {groupStatus === 'failed' && <Typography>Error: {error}</Typography>}
            <Grid container spacing={3}>
                {groups.map(group => (
                    <Grid item key={group._id} xs={12} md={6} lg={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{group.name}</Typography>
                                <Typography variant="body2">{group.description}</Typography>
                                <Typography variant="body2">Members: {group.members.join(', ')}</Typography>
                                <Typography variant="body2">Currency: {group.currency}</Typography>
                                <Typography variant="body2">Category: {group.category}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Groups;
