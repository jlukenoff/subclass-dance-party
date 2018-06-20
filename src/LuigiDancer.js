var LuigiDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="./img/luigi.png" class="LuigiDancer dancer animated infinite swing">');
  this.setPosition(top, left);
};

LuigiDancer.prototype = Object.create(Dancer.prototype);
LuigiDancer.prototype.constructor = LuigiDancer;

LuigiDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};
