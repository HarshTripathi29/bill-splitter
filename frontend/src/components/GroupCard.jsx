import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const GroupCard = ({ group, onAddExpense, isFavorite }) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);

   

    return (
        <div className="border rounded-xl border-none bg-white shadow-lg hover:shadow-lg relative">
            <Link to={`/groups/${group._id}`} className="text-left no-underline">
               <div className='p-3 bg-cyan-950 border border-none rounded-t-xl'>
                <h5 className="text-xl font-bold text-cyan-100">{group.name}</h5>
                <p className="mt-1 text-gray-200">{group.description}</p>
                </div>
                <div className='p-3'>
                <p className="text-cyan-800 mb-2 text-lg">Members: {group.members.join(', ')}</p>
                <p className="mt-1 text-amber-950 bg-amber-200 rounded-xl p-2 pt-0 w-fit">Category: {group.category}</p>
                </div>
            </Link>
            <Button
                variant="contained"
                color="primary"
                onClick={() => onAddExpense(group)}
                sx={{
                    mb: 2,
                    ml: 2,
                    backgroundColor: '#2980b9',
                    '&:hover': {
                        backgroundColor: '#3498db',
                    },
                }}
            >
                Add Expense
            </Button>
            
           
        </div>
    );
};

export default GroupCard;
