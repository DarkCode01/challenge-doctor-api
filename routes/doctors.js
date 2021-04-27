const express = require('express');
const controllers = require('../controllers/doctor');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const doctors = await controllers.get(req.query);

    res.status(200).json({
      result: doctors,
    });
  } catch (err) {
    console.log(err);
    res.send('erroror');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const doctor = await controllers.getDetails(req.params.id);

    res.status(200).json({
      result: doctor,
    });
  } catch (err) {
    console.log(err);
    res.send('erroror');
  }
});

router.post('/:id/review', async (req, res) => {
  try {
    const review = await controllers.review(req.params.id, req.body);

    res.status(201).json({
      result: review,
    });
  } catch (err) {
    console.log(err);
    res.send('erororor');
  }
});

module.exports = router;
