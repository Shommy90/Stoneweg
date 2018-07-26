$(document).ready(function(){

// SLIDER HOME
  $('.slider').slick({
      autoplay: true,
      arrows: true
  });


// SLIDER NEWS
  $('.slider-news').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true
  });


  // MODAL
  $('.modal-btn').on('click', function() {
      var modal = $(this).data('modal');
      $(modal).show();
  });

  $('.modal').on('click', function(e) {
      var className = e.target.className;
      if(className === 'modal' || className === 'modal-close') {
        $(this).closest('.modal').hide();
      }
  });


});
