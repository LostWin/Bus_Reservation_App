const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const User = require('../models/User');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Destination des fichiers uploadés

// Inscription
router.post('/signup', upload.single('idCardPhoto'), async (req, res) => {
  const { firstName, lastName, birthDate, username, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      birthDate,
      username,
      password: hashedPassword,
      role,
      idCardPhoto: req.file.path
    });
    res.json({ message: 'User created', user });
  } catch (error) {
    res.status(500).json({ message: 'Signup failed', error: error.message });
  }
});

// Connexion
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user.id, role: user.role }, 'secret_key');
    res.json({ message: 'User logged in', token, role: user.role });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
});


module.exports = router;
