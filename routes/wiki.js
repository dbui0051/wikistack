'use strict';

const router = require('express').Router();
let models = require('../models');
let Page = models.Page; 
let User = models.User; 

router.get('/', function(req, res, next){
	res.redirect('/');
});

router.post('/', function(req, res, next){
	//console.log(req.body)
	let title = req.body.title;
	let content = req.body.content;

    console.log('~~~ title: ', title, ' content: ', content);
	let page = Page.build({
		title: title,
		content: content
	});

	page.save();
	res.redirect('/');
});

router.get('/add', function(req, res, next){
	res.render('addpage');
});

module.exports = router;