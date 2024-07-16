const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true,
    },
    category: String,
    totalAmount: Number,
    paidBy: String,
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Expense', expenseSchema);
