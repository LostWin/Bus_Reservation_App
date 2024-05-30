const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Itinerary = sequelize.define('Itinerary', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  departureTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  arrivalTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false
  },
  driverName: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Itinerary;
