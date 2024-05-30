const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const itineraryRoutes = require('./routes/itineraries');
const reservationRoutes = require('./routes/reservations');

const app = express();
app.use(bodyParser.json());

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
