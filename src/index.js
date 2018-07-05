const _ = require('lodash');
const teams = require('./teams.json');

module.exports = {
  all: _.clone(teams),
  champion() {
    const i = Math.floor(Math.random() * teams.length);
    return teams[i];
  },
};
