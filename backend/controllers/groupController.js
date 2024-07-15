const Group = require('../models/Group');

const createGroup = async (req, res) => {
    try {
        const { name, description, members, currency, category } = req.body;

        const newGroup = new Group({
            name,
            description,
            members,
            currency,
            category,
        });

        await newGroup.save();

        res.status(201).json(newGroup);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createGroup,
};
