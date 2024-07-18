const express = require('express');
const router = express.Router();
const { registerUser,authUser,addFavoriteGroup, getFavoriteGroups } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');
const User = require('../models/User');



router.post('/register', registerUser);
router.post('/login', authUser);
// router.post('/logout', protect, logoutUser);

// router.post('/favorites', authMiddleware, addFavoriteGroup);
// router.get('/favorites', authMiddleware, getFavoriteGroups);

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id); // Assuming Mongoose schema
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
