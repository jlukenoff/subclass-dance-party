var LuigiDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="./img/luigi.png" class="LuigiDancer dancer">');
  this.setPosition(top, left);
};

LuigiDancer.prototype = Object.create(Dancer.prototype);
LuigiDancer.prototype.constructor = LuigiDancer;

LuigiDancer.prototype.step = function() {
  //callback original dancer step method
  Dancer.prototype.step.call(this);
  //show hide node
  this.$node.slideUp();
  this.$node.slideDown();
};