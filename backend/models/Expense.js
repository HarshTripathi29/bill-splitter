const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    totalAmount: { type: Number },
    category: { type: String },
    paidBy: { type: String},
    date: { type: Date, default: Date.now },
    groupId: { type: Schema.Types.ObjectId, ref: 'Group'},
    perPersonAmount: { type: Number},
    owes: [{
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        amount: { type: Number }
    }],
    owedTo: [{
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        amount: { type: Number}
    }]
});

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;
