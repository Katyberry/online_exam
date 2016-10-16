/**
 * Created by Administrator on 2016/10/9.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // res.end();
    res.render('teaeditclass');
});

module.exports = router;

