const popDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
};

popDancer.prototype = Object