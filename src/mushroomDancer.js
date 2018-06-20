var MushroomDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="./img/Mushroom.png" class="MushroomDancer dancer animated infinite bounce">');
  this.setPosition(top, left);
};

MushroomDancer.prototype = Object.create(Dancer.prototype);
MushroomDancer.prototype.constructor = MushroomDancer;

MushroomDancer.prototype.step = function() {
};