const express = require('express');
const router = express.Router();
const { registerUser, loginUser, addCoins,updateCoins, getUser } = require('../controllers/authController');
const auth = require('../middleware/auth');

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Update reward coins
router.put('/addcoins', auth, addCoins);
router.put('/updatecoins', auth, updateCoins);

// Get user info
router.get('/me', auth, getUser);

module.exports = router;
