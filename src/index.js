var teams = require('./teams.json');
var _ = require('lodash');
module.exports = {
  all: _.clone(teams),
  champion: function () {
    const i = Math.floor(Math.random() * teams.length)
    return teams[i];
  }
}