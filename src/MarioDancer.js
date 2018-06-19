var MarioDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="./img/Mario.png" class="MarioDancer dancer">');
  this.setPosition(top, left);
};

MarioDancer.prototype = Object.create(Dancer.prototype);
MarioDancer.prototype.constructor = MarioDancer;

MarioDancer.prototype.step = function() {
  //callback original dancer step method
  Dancer.prototype.step.call(this);
  //show hide node
  this.$node.fadeIn();
  this.$node.fadeOut();
};