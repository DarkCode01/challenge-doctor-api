'use strict';

const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const doctorRoutes = require('./routes/doctors');
const userRoutes = require('./routes/users');

const app = express();

app.use(cors());
app.use(logger());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/doctors', doctorRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
