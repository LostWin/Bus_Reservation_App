const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const itineraryRoutes = require('./routes/itineraries');
const reservationRoutes = require('./routes/reservations');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Pour gérer les requêtes de type form-data

app.use('/auth', authRoutes);
app.use('/itineraries', itineraryRoutes);
app.use('/reservations', reservationRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
