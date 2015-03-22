var Countdown = require('../index');
var expect = require('chai').expect;

describe('Countdown', function() {

  it('should diff 2015/01/02 and 2015/01/01', function() {

    var countdown = new Countdown(new Date(2015,1,2), new Date(2015,1,1));
    expect(countdown.toString()).to.be.equal('01:00:00:00');

  });

  it('should diff 2015/01/01 23:00:00 and 2015/01/01 22:00:00', function() {

    var countdown = new Countdown(new Date(2015,1,1,23,00,00), new Date(2015,1,1,22,00,00));
    expect(countdown.toString()).to.be.equal('00:01:00:00');

  });

  it('should diff 2015/01/01 22:30:00 and 2015/01/01 22:29:00', function() {

    var countdown = new Countdown(new Date(2015,1,1,22,30,00), new Date(2015,1,1,22,29,00));
    expect(countdown.toString()).to.be.equal('00:00:01:00');

  });

  it('should diff 2015/01/01 22:30:01 and 2015/01/01 22:30:00', function() {

    var countdown = new Countdown(new Date(2015,1,1,22,30,01), new Date(2015,1,1,22,30,00));
    expect(countdown.toString()).to.be.equal('00:00:00:01');

  });

});
