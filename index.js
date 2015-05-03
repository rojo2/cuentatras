function Countdown(end, current) {
  this.end = end;
  this.current = current || new Date();
  this.update();
}

function format(v,c) {
  c = c || 2;
  v = v.toString();
  while (v.length < c) {
    v = '0' + v;
  }
  return v;
}

Countdown.prototype = {
  constructor: Countdown,

  current: null,
  end: null,

  seconds: null,
  totalMinutes: null,
  minutes: null,
  totalHours: null,
  hours: null,
  days: null,

  diff: null,

  update: function() {
    var diff = (this.end - this.current) / 1000;

    this.seconds = Math.round(diff % 60);
    this.totalMinutes = Math.floor(diff / 60);
    this.minutes = this.totalMinutes % 60;
    this.totalHours = Math.floor(diff / 3600);
    this.hours = this.totalHours % 24;
    this.days = Math.floor(diff / 86400);
  },

  toString: function(fmt) {
    ///(?:([0-9]+d):)?(?:([0-9]+m):)?/
    return format(this.days, 2) + ':' + format(this.hours) + ':' + format(this.minutes) + ':' + format(this.seconds);
  }
};

module.exports = Countdown;
