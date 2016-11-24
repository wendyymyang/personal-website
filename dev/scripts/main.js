$(function() {

  $(window).load(function() {
    setTimeout(function() {
      $('.loader').fadeOut('slow', function() {
      });
    }, 3500);
  });

  $('#slideShow').cycle({
      fx: 'fade',
      pager: '#smallnav',
      pause: 2,
      speed: 3000,
      timeout: 4500,
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
  });
  
  if ($(window).width() < 940) {

    //Make top portfolio menu toggle on click
    $('.nav__portfolio').removeClass('remove-hover');

    $('.nav__portfolio').on('click', function() {

      $('.nav__portfolio ul').toggleClass('show');
      console.log('drop');
    });

    //Make portfolio projects scale on click
    $('.port_item').on('click', function() {
      $('.portfolioCoverHidden').css('visibility', 'visible');
    });
  }

  $('form').on('submit', function(e) {
    e.preventDefault();
    console.log('submitted');

    var modal = $('.modal');
    var modalTrigger = $('form');
    
    // Open the Modal when its trigger button is clicked.
    modal.fadeIn(300);
    
    // Add the modal to the page.
    $(modal).css('display', 'block');

    // Close the Modal when the user clicks anywhere outside of the Modal.
    window.onclick = function(event) {
      if (event.target === modal[0]) {
        modal.fadeOut(300);
        
        setTimeout(function() {
            // Remove the modal from the page and allow the user to scroll.
            $(modal).css('display', 'none');
            modalTrigger[0].reset();
        }, 300);

        $(window).scrollTop(0);
        location.reload(true);
      }
    }; 
  });
});







