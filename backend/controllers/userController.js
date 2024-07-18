const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Register a new user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400).json({ message: 'User already exists' });
        return;
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
};

// Authenticate (login) a user
const authUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
};

// Logout a user
const logoutUser = (req, res) => {
    // Implement logout logic here, for example clearing tokens or session data
    res.status(200).json({ message: 'User logged out successfully' });
};

const addFavoriteGroup = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const { groupId } = req.body;
        if (!user.favorites.includes(groupId)) {
            user.favorites.push(groupId);
        } else {
            user.favorites = user.favorites.filter(id => id !== groupId);
        }
        await user.save();
        res.status(200).json({ message: 'Favorite groups updated', favorites: user.favorites });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getFavoriteGroups = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('favorites');
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(user.favorites);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerUser, authUser, logoutUser,addFavoriteGroup, getFavoriteGroups  };



// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');


// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
// };

// const registerUser = async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         const userExists = await User.findOne({ email });

//         if (userExists) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         const user = await User.create({
//             name,
//             email,
//             password,
//         });

//         if (user) {
//             res.status(201).json({
//                 _id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 token: generateToken(user._id),
//             });
//         } else {
//             res.status(400).json({ message: 'Invalid user data' });
//         }
//     } catch (error) {
//         console.error('Error registering user:', error.message);
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// };

// const authUser = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });

//         if (user && (await bcrypt.compare(password, user.password))) {
//             res.json({
//                 _id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 token: generateToken(user._id),
//             });
//         } else {
//             res.status(401).json({ message: 'Invalid email or password' });
//         }
//     } catch (error) {
//         console.error('Error authenticating user:', error.message);
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// };

// const logoutUser = (req, res) => {
//     // Invalidate token logic if needed
//     res.status(200).json({ message: 'User logged out successfully' });
// };

// module.exports = { logoutUser, registerUser, authUser };
