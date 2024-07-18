import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGroupDetails, deleteExpense } from '../features/group/groupSlice';
import { IconButton } from '@mui/material';
import CategoryExpenseChart from './CategoryExpenseChart';
import DeleteIcon from '@mui/icons-material/Delete';
import AddExpenseModal from './AddExpenseModal';

const GroupDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const group = useSelector(state => state.group.selectedGroup);
    const expenses = useSelector(state => state.group.expenses);
    const members = group ? group.members : [];
    const status = useSelector(state => state.group.status);
    const error = useSelector(state => state.group.error);

    const [selectedExpense, setSelectedExpense] = useState(null);
    const [showExpenseModal, setShowExpenseModal] = useState(false);

    useEffect(() => {
        dispatch(fetchGroupDetails(id));
    }, [dispatch, id]);

    const handleEditExpense = (expense) => {
        setSelectedExpense(expense);
        setShowExpenseModal(true);
    };

    const handleDeleteExpense = (expenseId) => {
        dispatch(deleteExpense({ groupId: id, expenseId }));
    };

    const handleCloseExpenseModal = () => {
        setSelectedExpense(null);
        setShowExpenseModal(false);
    };

    const calculatePerPersonAmount = (totalAmount) => {
        const numMembers = members.length;
        if (numMembers === 0) return 0;
        return Math.round(totalAmount / numMembers); // Round to the nearest whole number
    };

    const totalExpenses = expenses ? expenses.reduce((acc, expense) => acc + expense.totalAmount, 0) : 0;
    const expenseData = expenses ? expenses.reduce((acc, expense) => {
        if (acc[expense.category]) {
            acc[expense.category] += expense.totalAmount;
        } else {
            acc[expense.category] = expense.totalAmount;
        }
        return acc;
    }, {}) : {};

    const expensePercentageData = Object.entries(expenseData).map(([category, amount]) => ({
        category,
        percentage: ((amount / totalExpenses) * 100).toFixed(2),
    }));

    return (
        <div className="mt-4 mx-auto max-w-screen-lg bg-white">
            {status === 'loading' && <p className="text-center text-red-600">Loading...</p>}
            {status === 'failed' && <p className="text-center text-red-600">Error: {error}</p>}
            {!group && <p>No group found</p>}
            {group && (
                <>
                    <div className="p-4 border bg-cyan-950 rounded-lg mb-4 shadow-lg">
                        <h2 className="text-3xl font-bold text-cyan-100 mb-2">{group.name}</h2>
                        <p className="text-gray-200 mb-2">{group.description}</p>
                        <p className="text-cyan-200 mb-2 border border-cyan-500 p-2 rounded-lg w-fit text-lg">Members: {members.join(', ')}</p>
                        <p className="text-amber-950 mb-2 bg-amber-400 rounded-xl p-2 w-fit">Category: {group.category}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            {expenses && expenses.map(expense => (
                                <div key={expense._id} className="relative p-4 border bg-white border-gray-300 rounded-lg mb-4 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{expense.category}</h3>
                                    <p className="text-gray-600 mb-2">Total Amount: {expense.totalAmount}</p>
                                    <p className="text-gray-600 mb-2">Paid By: {expense.paidBy}</p>
                                    <p className="text-blue-600 mb-2">Per Person: {calculatePerPersonAmount(expense.totalAmount)}</p>
                                    
                                    <div className="absolute top-2 right-2 flex space-x-2">
                                        <IconButton onClick={() => handleDeleteExpense(expense._id)}>
                                            <DeleteIcon className="text-cyan-950 absolute top-2 right-2" />
                                        </IconButton>
                                    </div>
                                    
                                    <div className="absolute bottom-4 right-2 w-20 h-20 bg-amber-200 text-amber-950 rounded-full flex items-center justify-center">
                                        <p className="text-sm font-bold">{new Date(expense.date).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-center p-4 border border-gray-300 rounded-lg shadow-lg">
                            <CategoryExpenseChart expenseData={expensePercentageData} />
                        </div>
                    </div>
                    <AddExpenseModal
                        groupId={id}
                        expense={selectedExpense}
                        open={showExpenseModal}
                        onClose={handleCloseExpenseModal}
                        members={members}
                    />
                </>
            )}
        </div>
    );
};

export default GroupDetail;
