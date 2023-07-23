const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const userRoutes = require('./routes/user.route');
const dateRoutes = require('./routes/repair.route');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/repairs', dateRoutes);

module.exports = app;
