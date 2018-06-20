var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {

  var styleSettings = {
    top: top,
    left: left / 10
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  this.$node.css({display: inline, position: 'absolute'});
}
