'use strict';

const router = require('express').Router();
const nunjucks = require('nunjucks');

router.get('/', function(req, res, next){
	res.redirect('/');
});

router.post('/', function(req, res, next){
	res.render('addpage', {});
});

router.get('/add', function(req, res, next){
	res.render('addpage');
});



module.exports = router;