const express = require('express');
const Reservation = require('../models/Reservation');

const router = express.Router();

// Faire une réservation
router.post('/book', async (req, res) => {
  const { userId, itineraryId } = req.body;
  const reservation = await Reservation.create({ userId, itineraryId, status: 'booked' });
  res.json({ message: 'Reservation made', reservation });
});

// Annuler une réservation
router.put('/cancel/:id', async (req, res) => {
  const { id } = req.params;
  await Reservation.update({ status: 'cancelled' }, { where: { id } });
  res.json({ message: 'Reservation cancelled' });
});

// Obtenir les réservations d'un utilisateur
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  const reservations = await Reservation.findAll({ where: { userId } });
  res.json({ reservations });
});

module.exports = router;
