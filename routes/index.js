const router = require('express').Router();
const charity = require('./charity');
const event = require('./event')

router.use('/associations', charity);
router.use('/events', event)

module.exports = router;