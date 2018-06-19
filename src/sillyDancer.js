var SillyDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="./img/luigi.png" class="sillyDancer">');
  this.setPosition(top, left);
};

SillyDancer.prototype = Object.create(Dancer.prototype);
SillyDancer.prototype.constructor = SillyDancer;

SillyDancer.prototype.step = function() {
  //callback original dancer step method
  Dancer.prototype.step.call(this);
  //show hide node
  this.$node.toggle();
};