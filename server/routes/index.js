var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  try {
    res.json({message: "It's home page"});
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
