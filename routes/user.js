'use strict';

const router = require('express').Router();
const User = require('../models').User;

router.get('/', function(req, res, next) { // get all users
  res.redirect('/');
//   User.findAll()
//   .then(function(users) {
//     console.log('Got all users!');
//     res.sendStatus(200);
//   })
})

router.get('/:id', function(req, res, next) { // get user with id#
  res.send('get id');
})

router.post('/', function(req, res, next) {
  //
})

router.put('/:id', function(req, res, next) {

})

router.delete('/:id', function(req, res, next) {

})

module.exports = router;