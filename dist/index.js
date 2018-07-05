'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _teams = require('./teams.json');

var _teams2 = _interopRequireDefault(_teams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// module.exports = {
//   all: _.clone(teams),
//   first: teams[0],
//   champion() {
//     const i = Math.floor(Math.random() * teams.length);
//     return teams[i];
//   },
// };

// const _ = require('lodash');
// const teams = require('./teams.json');

exports.default = {
  all: _lodash2.default.clone(_teams2.default),
  first: _teams2.default[0],
  champion: function champion() {
    var i = Math.floor(Math.random() * _teams2.default.length);
    return _teams2.default[i];
  }
};