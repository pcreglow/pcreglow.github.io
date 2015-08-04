(function(window) {

  $('#posts').click(function() {
    $('.tab-1 article').toggleClass('inactive');
    $('.tab-1 article').toggleClass('.active');
  });

  $('#contact').click(function() {
    $('.tab-2 article').toggleClass('inactive');
    $('.tab-2 article').toggleClass('.active');
  });




})(window);
