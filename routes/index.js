'use strict';

const router = require('express').Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');

router.use('/wiki', wikiRouter); // also: router.use('/wiki', require('./wiki'));
router.use('/user', userRouter);

module.exports = router;