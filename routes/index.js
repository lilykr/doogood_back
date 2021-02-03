const router = require('express').Router();
const charity = require('./charity');

router.use('/associations', charity);

module.exports = router;