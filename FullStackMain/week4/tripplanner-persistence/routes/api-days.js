var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var Day = require("../models").Day;

router.get("/", function(req, res, next){
  Day.findAll()
  .then(function(dayList){
    res.send(dayList)
  })
});

router.get("/:id", function(req, res, next){
  Day.findOne({
    where: {
      dayNumber: req.params.id
    }
  })
  .then(function(day){
    res.json(day)
  });
})

router.delete("/:id", function(req, res, next){
  Day.findOne({
    where: {
      dayNumber: req.params.id
    }
  })
  .then(function(day){
    return day.destroy();
  })
  .then(function(){
    res.json("I did it, AJAX function, hope you like it")
  })
})

router.post("/", function(req, res, next){
  console.log(req.body.id)
  return Day.create({
    dayNumber: req.body.id
  })
  .then(function(result){
    res.json("Day created")
  })
})


module.exports = router;
