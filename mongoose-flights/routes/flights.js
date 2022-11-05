var express = require('express');
const { route } = require('.');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')
var destinationsCtrl = require('../controllers/destinations');
var ticketsCtrl = require('../controllers/tickets');


router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/', flightsCtrl.index);
router.get('/:id', flightsCtrl.show);
router.post('/:id/destinations', destinationsCtrl.create);
router.get('/:id/tickets/new', ticketsCtrl.new);
router.post('/:id/tickets', ticketsCtrl.create);

module.exports = router;
