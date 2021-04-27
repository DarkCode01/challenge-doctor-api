'use strict';

const express = require('express');
const logger = require('morgan');
const doctorRoutes = require('./routes/doctors');
const userRoutes = require('./routes/users');

const app = express();

app.use(logger());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/doctors', doctorRoutes);
app.use('/users', userRoutes);

module.exports = app;
