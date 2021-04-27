const express = require('express');
const controllers = require('../controllers/user');
const router = express.Router();

/* GET users listing. */
router.post('/', async (req, res) => {
  try {
    const user = await controllers.create(req.body);

    res.status(201).json({
      result: user,
    });
  } catch (err) {
    console.log(err);
    res.send('erroor');
  }
});

module.exports = router;
