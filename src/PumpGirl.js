var PumpDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="./img/pumpgirl.gif" class="PumpDancer dancer">');
  this.setPosition(top, left);
};

PumpDancer.prototype = Object.create(Dancer.prototype);
PumpDancer.prototype.constructor = PumpDancer;

PumpDancer.prototype.step = function() {
};