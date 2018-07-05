// const _ = require('lodash');
// const teams = require('./teams.json');

import _ from 'lodash';
import teams from './teams.json';

// module.exports = {
//   all: _.clone(teams),
//   first: teams[0],
//   champion() {
//     const i = Math.floor(Math.random() * teams.length);
//     return teams[i];
//   },
// };

export default {
  all: _.clone(teams),
  first: teams[0],
  champion() {
    const i = Math.floor(Math.random() * teams.length);
    return teams[i];
  },
};
