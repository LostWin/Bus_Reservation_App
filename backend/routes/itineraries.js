const express = require('express');
const Itinerary = require('../models/Itinerary');

const router = express.Router();

// Ajouter un itinéraire
router.post('/add', async (req, res) => {
  const { departureTime, arrivalTime, destination, driverName } = req.body;
  try {
    const itinerary = await Itinerary.create({ departureTime, arrivalTime, destination, driverName });
    res.json({ message: 'Itinerary added', itinerary });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add itinerary', error: error.message });
  }
});

// Modifier un itinéraire
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { departureTime, arrivalTime, destination, driverName } = req.body;
  try {
    await Itinerary.update({ departureTime, arrivalTime, destination, driverName }, { where: { id } });
    res.json({ message: 'Itinerary updated' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update itinerary', error: error.message });
  }
});

// Supprimer un itinéraire
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Itinerary.destroy({ where: { id } });
    res.json({ message: 'Itinerary deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete itinerary', error: error.message });
  }
});

// Obtenir tous les itinéraires
router.get('/all', async (req, res) => {
  try {
    const itineraries = await Itinerary.findAll();
    res.json({ itineraries });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch itineraries', error: error.message });
  }
});

module.exports = router;
