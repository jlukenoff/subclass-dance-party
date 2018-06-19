var PumpDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="./img/pumpgirl.gif" class="PumpDancer dancer">');
  this.setPosition(top, left);
};

PumpDancer.prototype = Object.create(Dancer.prototype);
PumpDancer.prototype.constructor = PumpDancer;

PumpDancer.prototype.step = function() {
  /*//callback original dancer step method
  Dancer.prototype.step.call(this);
  //show hide node
  this.$node.toggle();*/
};