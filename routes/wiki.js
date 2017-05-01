'use strict';

const router = require('express').Router();

router.get('/', function(req, res, next) {
    res.redirect('/');
})

router.get('/add', function(req, res, next) {
    res.render('addpage');
})

router.post('/', function(req, res, next) {
    res.send('got to POST /wiki/');
})

module.exports = router;