var MarioDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="./img/Mario.png" class="MarioDancer dancer">');
  this.setPosition(top, left);
  this.addClickHandler();
};

MarioDancer.prototype = Object.create(Dancer.prototype);
MarioDancer.prototype.constructor = MarioDancer;

MarioDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.addClass('animated infinite jello');
};

MarioDancer.prototype.addClickHandler = function() {
  $('.MarioDancer').on('click', function(event) {
    $(this).css({height: '200px'}); 
  });
}