var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var Day = require("../models").Day;
var apiRouter = require('./api-options')
var daysRouter = require('./api-days')

router.get('/', function(req, res, next) {
  console.log('i arrived main route')
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});

router.use('/api/days', daysRouter)
router.use('/api', apiRouter)

module.exports = router;
