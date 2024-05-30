const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// Inscription
router.post('/signup', async (req, res) => {
  const { username, password, role } = req.body;
  try {
    console.log('Received signup request:', req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword, role });
    console.log('User created successfully:', user);
    res.json({ message: 'User created', user });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Signup failed', error: error.message });
  }
});

module.exports = router;
