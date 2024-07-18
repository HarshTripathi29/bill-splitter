const Group = require('../models/Group');
const Expense = require('../models/Expense'); // Ensure this line is present

const createGroup = async (req, res) => {
    try {
        const { name, description, members, category } = req.body;

        // Logging the received data for debugging
        console.log("Creating group with data:", req.body);

        const newGroup = new Group({
            name,
            description,
            members,
            category,
        });

        await newGroup.save();

        res.status(201).json(newGroup);
    } catch (error) {
        console.error("Error creating group:", error);  // Improved logging
        res.status(500).json({ message: error.message });
    }
};



const getAllGroups = async (req, res) => {
    try {
        const groups = await Group.find();
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to add expense to a group
const addExpense = async (req, res) => {
    const { groupId } = req.params;
    const { category, totalAmount, paidBy } = req.body;

    try {
        // Create a new expense instance
        const newExpense = new Expense({
            groupId,
            category,
            totalAmount,
            paidBy,
            date: new Date(), // Automatically record the current date
        });

        // Save the expense to the database
        await newExpense.save();

        // Update the group with the new expense
        const group = await Group.findByIdAndUpdate(groupId, {
            $push: { expenses: newExpense._id },
        });

        res.status(201).json({ message: 'Expense added successfully', expense: newExpense });
    } catch (err) {
        console.error('Error adding expense:', err);
        res.status(500).json({ message: err.message });
    }
};



const settleUp = async (req, res) => {
    const { groupId } = req.params;

    try {
        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }

        // Calculate total expenses
        const totalExpenses = group.expenses.reduce((total, expense) => total + expense.totalAmount, 0);

        // Calculate share per member
        const numMembers = group.members.length;
        const share = totalExpenses / numMembers;

        // Update balances
        group.members.forEach(member => {
            member.balance -= share;
        });

        await group.save();

        res.status(200).json(group);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Fetch group details and expenses
const getGroupDetails = async (req, res) => {
    try {
        console.log(`Fetching group details for ID: ${req.params.id}`);
        
        const group = await Group.findById(req.params.id);
        if (!group) {
            console.log('Group not found');
            return res.status(404).json({ message: 'Group not found' });
        }

        const expenses = await Expense.find({ groupId: req.params.id });
        console.log('Group details fetched successfully');
        res.json({ group, expenses });
    } catch (err) {
        console.error('Error fetching group details:', err);
        res.status(500).json({ message: err.message });
    }
};


const updateExpense = async (req, res) => {
    const { category, totalAmount, paidBy } = req.body;
    try {
        const updatedExpense = await Expense.findByIdAndUpdate(
            req.params.expenseId,
            { category, totalAmount, paidBy },
            { new: true }
        );
        if (!updatedExpense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.json(updatedExpense);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

const deleteExpense = async (req, res) => {
    try {
        const deletedExpense = await Expense.findByIdAndDelete(req.params.expenseId);
        if (!deletedExpense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        await Group.findByIdAndUpdate(req.params.groupId, { $pull: { expenses: req.params.expenseId } });
        res.json({ message: 'Expense deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};


module.exports = {
    createGroup,
    getAllGroups,
    addExpense,
    settleUp,
    getGroupDetails,
    updateExpense,
    deleteExpense,
};