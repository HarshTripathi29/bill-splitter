const createExpense = async (req, res) => {
    try {
        const { totalAmount, category, paidBy, groupId, members } = req.body;
        const perPersonAmount = totalAmount / members.length;
        
        const owes = members.map(member => ({
            userId: member._id,
            amount: member._id === paidBy ? 0 : perPersonAmount
        }));

        const owedTo = members.filter(member => member._id !== paidBy).map(member => ({
            userId: paidBy,
            amount: perPersonAmount
        }));

        const newExpense = new Expense({
            totalAmount,
            category,
            paidBy,
            groupId,
            perPersonAmount,
            owes,
            owedTo
        });

        const savedExpense = await newExpense.save();
        res.status(201).json(savedExpense);
    } catch (error) {
        console.error('Error creating expense:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
