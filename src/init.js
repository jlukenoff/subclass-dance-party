$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];


    let time = (Math.random() * 1000);
    time = time < 700 ? 750 : time;
    
    let getRandomPosition = function(axis) {
      let position;
      if (axis === 'height') {
        position = ($("body").height() * Math.random());
      } else if (axis === 'width'){
        position = ($("body").width() * Math.random());
      }
      return position;
    };
    
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      time 
    );
    
    $('body').append(dancer.$node);
    $('.MarioDancer').on('click', function(event) {
      $(this).css({height: '300px', top: (this.top - 70).toString() + 'px', left: (this.left - 70).toString() + 'px'}); 
    });
    
    $('.MushroomDancer').on('click', function(event) {
      $('.MarioDancer').css({height: '140px', top: this.top, left: this.left}); 
    }); 
  });
  
  $('.lineUpButton').on('click', function(event) {
    $('.dancer').css({top: '417px', position: 'relative'});
  });
  
    
});

