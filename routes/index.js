<<<<<<< HEAD
=======
'use strict';

>>>>>>> a75ff8d236dd665012ebc135881816c60688018c
const router = require('express').Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');

router.use('/wiki', wikiRouter);
router.use('/users', userRouter);

module.exports = router;