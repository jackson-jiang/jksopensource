import fifa from './index'
import { expect } from 'chai';

describe('jks-opensource', function() {
  describe('all', function() {
    it('一共4只球队', function() {
      expect(fifa.all.length).to.equal(4);
    });
    it('必须有`巴西`队', function() {
      expect(fifa.all).to.include('巴西');
    });
  });
  describe('champion', function() {
    it('冠军球队在所有队伍中', function() {
      expect(fifa.all).to.include(fifa.champion());
    });
  });
});
