const express = require('express');
const controllers = require('../controllers/doctor');
const paginate = require('express-paginate');

const router = express.Router();

router.use(paginate.middleware(15, 50));

router.get('/', async (req, res) => {
  try {
    const doctors = await controllers.get({
      limit: req.query.limit,
      skip: req.skip,
      q: req.query.q,
    });
    const pages = Math.ceil(doctors.count / req.query.limit);

    res.status(200).json({
      result: doctors.rows,
      pageCount: pages,
      itemCount: doctors.count,
      page: paginate.getArrayPages(req)(
        3,
        pages,
        doctors.count,
        req.query.page || 1
      ),
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

router.post('/:id/appointment', async (req, res) => {
  try {
    const appointment = await controllers.appointment(req.params.id, req.body);

    res.status(201).json({
      result: appointment,
    });
  } catch (err) {
    console.log(err);
    res.send('erororor');
  }
});

module.exports = router;
