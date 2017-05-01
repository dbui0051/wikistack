'use strict';

const router = require('express').Router();
const User = require('../models').User;
module.exports = router;

router.get('/', function(req, res, next){
	res.redirect('/');
});

router.get('/:user', function(req, res, next){
	let user = req.params.user;
	res.send();
});

router.post('/', function(req, res, next){
	res.send();
});

router.put('/:user', function(req, res, next){
	let user = req.params.user;
	res.send();
});

router.delete('/:user', function(req, res, next){
	let user = req.params.user;
	res.send();
});
