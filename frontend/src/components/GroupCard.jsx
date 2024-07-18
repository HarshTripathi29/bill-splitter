import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { StarBorder, Star } from '@mui/icons-material';

const GroupCard = ({ group, onAddExpense, onToggleFavorite, isFavorite }) => {
    return (
        <div className=" border rounded-xl border-none bg-white shadow-lg hover:shadow-lg relative">
            <Link to={`/groups/${group._id}`} className="text-left no-underline">
               <div className='p-3 bg-cyan-100 border border-none rounded-t-xl'>
                <h5 className="text-xl font-bold text-cyan-900">{group.name}</h5>
                <p className="mt-1 text-gray-800">{group.description}</p>
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
                    ml:2,
                    backgroundColor: '#2980b9',
                    '&:hover': {
                        backgroundColor: '#3498db',
                    },
                }}
            >
                Add Expense
            </Button>
            <Button
                onClick={() => onToggleFavorite(group._id)}
                sx={{
                    mt: 2,
                    ml: 2,
                    color: '#7f8c8d',
                    '&:hover': {
                        color: '#2c3e50',
                    },
                    position: 'absolute',
                    top: 2,
                    right: 2,
                }}
            >
                {isFavorite ? <Star sx={{ color: '#f1c40f' }} /> : <StarBorder />}
            </Button>
        </div>
    );
};

export default GroupCard;
