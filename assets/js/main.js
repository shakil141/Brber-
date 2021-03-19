	// Preloader
	setTimeout(function(){ 
		$('.preloader').addClass('preloader-circle-hide');
	}, 500);
	
	// scroll up
	$('#back-top a').on("click", function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

    // 
    $('.navbar-toggler').click(function(){
        $(this).toggleClass('active')
    });

	/* 2. sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-main").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-main").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });


    $('.team-slider-wrapper').owlCarousel({
        loop:true,
        nav:false,
        autoplay:false,
        margin: 30,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
  // overlay
  $(".snake").snakeify({
    speed: 200,
  });
  

 
  $('.cut-slider-inner').owlCarousel({
        loop:true,
        nav:false,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2,
                dots:true
            }
        },
        margin: 100,
    });
  $('.cut-slider-inner').find('.owl-dots').removeClass('disabled');