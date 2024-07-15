import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ExpenseGraph from './ExpenseGraph';
import CategoryExpenseChart from './CategoryExpenseChart';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">Welcome User</Typography>
                            <Typography variant="body2">Some dummy details about the user.</Typography>
                            <Button variant="contained" color="primary" onClick={() => navigate('/groups')}>
                                Go to Groups
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Balance</Typography>
                            <Typography variant="body2">$0.00</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Favourite Groups</Typography>
                            <Typography variant="body2">Group A, Group B, Group C</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Expense Graph</Typography>
                            <ExpenseGraph />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Category Expense Chart</Typography>
                            <CategoryExpenseChart />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
