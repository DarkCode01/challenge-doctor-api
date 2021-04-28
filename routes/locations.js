const express = require('express');
const controllers = require('../controllers/location');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const locations = await controllers.get();

    res.status(200).json({
      result: locations,
    });
  } catch (err) {
    res.send('erroor');
  }
});

module.exports = router;
