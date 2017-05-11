var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var Day = require('../models').Day;

router.get('/hotels', function (req, res, next) {
  console.log('hotels route worked');
  Hotel.findAll()
  .then(function(allHotels){
    res.json(allHotels)
  })
  .catch(next)
})

router.post('/hotels', function( req, res, next){
  Day.findOne({
    where:{
      dayNumber: req.body.id
    }
  })
  .then(function(result){
    return result.update({hotelId: req.body.hotelId})
  }).then(function(){
    res.send("hi")
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

router.post('/restaurants', function( req, res, next){
  Day.findOne({
    where:{
      dayNumber: req.body.id
    }
  })
  .then(function(result){
    return result.addRestaurant(req.body.restaurantId)
  }).then(function(){
    res.send("hi")
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

router.post('/activities', function( req, res, next){
  Day.findOne({
    where:{
      dayNumber: req.body.id
    }
  })
  .then(function(result){
    return result.addActivity(req.body.activityId)
  }).then(function(){
    res.send("hi")
  })
  .catch(next)
})



module.exports = router;
