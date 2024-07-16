import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ExpenseGraph from './ExpenseGraph';
import CategoryExpenseChart from './CategoryExpenseChart';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <Container sx={{ mt: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Card
                        sx={{
                            borderRadius: '12px',
                            backgroundColor: '#ecf0f1',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            '&:hover': {
                                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                            },
                        }}
                    >
                        <CardContent sx={{ textAlign: 'center', p: 4 }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#34495e' }}>
                            Hello there, Welcome back!
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 2, color: '#7f8c8d' }}>
                            Keep track of shared expenses and settle your corresponding balances in a convenient and personalized way.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => navigate('/groups')}
                                sx={{
                                    mt: 3,
                                    backgroundColor: '#2980b9',
                                    '&:hover': {
                                        backgroundColor: '#3498db',
                                    },
                                }}
                            >
                                View Groups
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card
                        sx={{
                            borderRadius: '12px',
                            backgroundColor: '#ecf0f1',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            '&:hover': {
                                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                            },
                        }}
                    >
                        <CardContent sx={{ textAlign: 'center', p: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#34495e' }}>
                                Total Balance
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 2, color: '#7f8c8d' }}>
                                $0.00
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card
                        sx={{
                            borderRadius: '12px',
                            backgroundColor: '#ecf0f1',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            '&:hover': {
                                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                            },
                        }}
                    >
                        <CardContent sx={{ textAlign: 'center', p: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#34495e' }}>
                                Favourite Groups
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 2, color: '#7f8c8d' }}>
                                Group A, Group B, Group C
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card
                        sx={{
                            borderRadius: '12px',
                            backgroundColor: '#ecf0f1',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            '&:hover': {
                                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                            },
                        }}
                    >
                        <CardContent sx={{ p: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#34495e' }}>
                                Expense Graph
                            </Typography>
                            <ExpenseGraph />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card
                        sx={{
                            borderRadius: '12px',
                            backgroundColor: '#ecf0f1',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            '&:hover': {
                                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                            },
                        }}
                    >
                        <CardContent sx={{ p: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#34495e' }}>
                                Category Expense Chart
                            </Typography>
                            <CategoryExpenseChart />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
