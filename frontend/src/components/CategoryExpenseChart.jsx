import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryExpenseChart = ({ expenseData }) => {
    const data = {
        labels: expenseData.map(expense => expense.category),
        datasets: [
            {
                label: '% of Expenses',
                data: expenseData.map(expense => expense.percentage),
                backgroundColor: [
                    '#ff6384',
                    '#36a2eb',
                    '#ffce56',
                    '#4bc0c0',
                    '#9966ff',
                    '#ff9f40',
                ],
                hoverBackgroundColor: [
                    '#ff6384',
                    '#36a2eb',
                    '#ffce56',
                    '#4bc0c0',
                    '#9966ff',
                    '#ff9f40',
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.label}: ${context.raw}%`;
                    },
                },
            },
        },
    };

    return (
        <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#34495e', mb: 2, textAlign: 'center' }}>Expense Distribution</Typography>
            <Pie data={data} options={options} />
        </Box>
    );
};

export default CategoryExpenseChart;
