'use strict';

const router = require('express').Router();

router.get('/', function(req, res, next){
	res.redirect('/');
});

router.post('/', function(req, res, next){
	console.log(req.body)
	res.json(req.body);
});

router.get('/add', function(req, res, next){
	console.log(req.body);
	res.render('addpage');
});

module.exports = router;