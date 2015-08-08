var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('cards', { title: 'Team Taco :: Contact Cards' });
});

module.exports = router;
