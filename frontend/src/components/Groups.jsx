import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { fetchGroups, toggleFavoriteGroup } from '../features/group/groupSlice';
import AddExpenseModal from './AddExpenseModal';
import GroupCard from './GroupCard';

const Groups = () => {
    const dispatch = useDispatch();
    const groups = useSelector((state) => state.group.groups);
    const groupStatus = useSelector((state) => state.group.status);
    const error = useSelector((state) => state.group.error);
    const favoriteGroups = useSelector((state) => state.group.favorites);
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(null);

    useEffect(() => {
        if (groupStatus === 'idle') {
            dispatch(fetchGroups());
        }
    }, [groupStatus, dispatch]);

    const handleOpenAddExpenseModal = (group) => {
        setSelectedGroup(group);
        setShowAddExpenseModal(true);
    };

    const handleCloseAddExpenseModal = () => {
        setShowAddExpenseModal(false);
        setSelectedGroup(null);
    };

    const handleToggleFavorite = (groupId) => {
        dispatch(toggleFavoriteGroup(groupId));
    };

    return (
        <div className="mt-4 p-4">
            <div className="left">
                <h1 className="text-4xl font-bold text-cyan-800 mb-4">Groups</h1>
                {groupStatus === 'loading' && <p className="text-red-600">Loading...</p>}
                {groupStatus === 'failed' && <p className="text-red-600">Error: {error}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {groups.map((group) => (
                    <div key={group._id}>
                        <GroupCard
                            group={group}
                            onAddExpense={handleOpenAddExpenseModal}
                            onToggleFavorite={handleToggleFavorite}
                            isFavorite={favoriteGroups.includes(group._id)}
                        />
                    </div>
                ))}
            </div>

            {/* Add Expense Modal */}
            <AddExpenseModal
                groupId={selectedGroup ? selectedGroup._id : null}
                open={showAddExpenseModal}
                onClose={handleCloseAddExpenseModal}
            />
        </div>
    );
};

export default Groups;
