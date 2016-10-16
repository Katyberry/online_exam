
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('teacorstu');
});

module.exports = router;