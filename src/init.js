$(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    let time = (Math.random() * 1000);
    time = time < 700 ? 750 : time;
    
    let getRandomWidthOrHeight = function(axis) {
      let position;
      if (axis === 'height') {
        position = ($("body").height() * Math.random());
      } else if (axis === 'width'){
        position = ($("body").width() * Math.random());
        // console.log(position);
      }
      return position;
    };
    
    var dancer = new dancerMakerFunction(
      getRandomWidthOrHeight('height'),
      getRandomWidthOrHeight('width'),
      time 
    );
    
    
    
    $('body').append(dancer.$node);
  });
  
  let linedUp = false;
  $('.lineUpButton').on('click', function(event) {
    linedUp = !linedUp;
    console.log(linedUp);
    if (linedUp)  {
      $('.dancer').css({top: '412px', position: 'absolute'});
    } else {
      $('.dancer').css({top: getRandomWidthOrHeight('height')})
    }
    
  });
});

