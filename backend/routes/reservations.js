const express = require('express');
const Reservation = require('../models/Reservation');
const router = express.Router();

// Créer une réservation
router.post('/book', async (req, res) => {
  const { userId, seats, time, date } = req.body;
  try {
    const reservation = await Reservation.create({
      userId,
      seats,
      time,
      date,
    });
    res.json({ message: 'Reservation successful', reservation });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create reservation', error: error.message });
  }
});




// Annuler une réservation
router.put('/cancel/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Reservation.update({ status: 'cancelled' }, { where: { id } });
    res.json({ message: 'Reservation cancelled' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to cancel reservation', error: error.message });
  }
});

// Obtenir les réservations d'un utilisateur
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const reservations = await Reservation.findAll({ where: { userId } });
    res.json({ reservations });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch reservations', error: error.message });
  }
});

module.exports = router;
