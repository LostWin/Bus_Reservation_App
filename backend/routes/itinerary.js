const express = require('express');
const Itinerary = require('../models/Itinerary');

const router = express.Router();

// Ajouter un itinéraire
router.post('/add', async (req, res) => {
  const { departureTime, arrivalTime, destination, driverName } = req.body;
  const itinerary = await Itinerary.create({ departureTime, arrivalTime, destination, driverName });
  res.json({ message: 'Itinerary added', itinerary });
});

// Modifier un itinéraire
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { departureTime, arrivalTime, destination, driverName } = req.body;
  await Itinerary.update({ departureTime, arrivalTime, destination, driverName }, { where: { id } });
  res.json({ message: 'Itinerary updated' });
});

// Supprimer un itinéraire
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Itinerary.destroy({ where: { id } });
  res.json({ message: 'Itinerary deleted' });
});

// Obtenir tous les itinéraires
router.get('/all', async (req, res) => {
  const itineraries = await Itinerary.findAll();
  res.json({ itineraries });
});

module.exports = router;
