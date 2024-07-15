import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const CategoryExpenseChart = () => {
    const data = {
        labels: ['Rent', 'Groceries', 'Utilities', 'Entertainment'],
        datasets: [
            {
                label: 'Category Expenses',
                data: [300, 50, 100, 80],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
    };

    return <Doughnut data={data} />;
};

export default CategoryExpenseChart;
