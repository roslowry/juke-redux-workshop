var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;

router.get('/hotels', function (req, res, next) {
  console.log('hotels route worked');
  Hotel.findAll()
  .then(function(allHotels){
    res.json(allHotels)
  })
  .catch(next)
})

router.get('/restaurants', function (req, res, next) {
  console.log('restaurant-options route worked');
  Restaurant.findAll()
  .then(function(allRestaurants){
    res.json(allRestaurants)
  })
  .catch(next)
})

router.get('/activities', function (req, res, next) {
  console.log('activities route worked');
  Activity.findAll()
  .then(function(activities){
    res.json(activities)
  })
  .catch(next)

})



module.exports = router;
