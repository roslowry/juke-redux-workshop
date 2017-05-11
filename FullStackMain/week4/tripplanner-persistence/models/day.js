var Sequelize = require('sequelize');
var db = require('./_db');

var Day = db.define("day", {
  dayNumber:{
    type: Sequelize.INTEGER
  }
})

module.exports = Day
