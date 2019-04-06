(function ($) {
	"use strict";

    jQuery(document).ready(function($){

		// preloader
		$(window).on("load", function (){
			$('#preloader').fadeOut(500);
		});


		// Menu js for Position fixed
		// $(window).scroll(function(){
		// 	var window_top = $(window).scrollTop() + 1; 
		// 	if (window_top > 200) {
		// 		$('.menu-area').addClass('menu_fixed animated fadeInDown');
		// 	} else {
		// 		$('.menu-area').removeClass('menu_fixed animated fadeInDown');
		// 	}
		// });	

		// // home-2 Menu js for Position fixed
		// $(window).scroll(function(){
		// 	var window_top = $(window).scrollTop() + 1; 
		// 	if (window_top > 200) {
		// 		$('#home-2 .menu-area').addClass('menu_fixed animated fadeInDown');
		// 	} else {
		// 		$('#home-2 .menu-area').removeClass('menu_fixed animated fadeInDown');
		// 	}
		// });


		// meanmenu by mobile menu
		
		$('#mobile-menu').meanmenu({
			meanScreenWidth: "991",
			meanMenuContainer: '.responsive-menu'
		});
		
		//Header Slider animation

		$('.tlt').textillate({ 
			in: { effect: 'rollIn' },
			out: { effect: 'fadeOutRight', sync: true },
			loop: true
		  });

		  $('.tefct').textillate({ 
			in: { effect: 'slideInLeft' },
			out: { effect: 'fadeIn', shuffle: true },
			loop: true,
			minDisplayTime: 1000
		  });

		// Header slider
		$(".header-slider-active").owlCarousel({
			loop: true,
			items:1,
			dots: true,
			autoplay: false,
		});	



		// service area slider
		$(".single-service-carousel").owlCarousel({
			loop: true,
			dots: true,
			margin: 10,
			pullDrag: true,
			lazyLoad: true,
			autoplay: false,
			responsive:{
		        0:{
		            items:1,
		            dots: false,
		        },
		        768:{
		            items:2,
		            dots: false,
		        },
		        992:{
		            items:3,
		            dots: false
		        },
		        1198:{
		            items:3,
		            loop:true,
		            dots: false
		        },
		        1200:{
		            items:3,
		            loop:true,
		            dots: true
		        }
		    }
		});


		// blog area slider
		$(".single-blog-carousel").owlCarousel({
			loop: true,
			dots: true,
			margin: 20,
			pullDrag: true,
			lazyLoad: true,
			autoplay: false,
			responsive:{
		         0:{
		            items:1,
		            dots: false,
		        },
		        768:{
		            items:2,
		            dots: false,
		        },
		        992:{
		            items:3,
		            dots: false
		        },
		        1198:{
		            items:3,
		            loop:true,
		            dots: false
		        },
		        1200:{
		            items:3,
		            loop:true,
		            dots: true
		        }
		    }
		});

			// blog area slider
		$(".single-team-carousel").owlCarousel({
			loop: true,
			dots: true,
			margin: 20,
			pullDrag: true,
			lazyLoad: true,
			autoplay: false,
			responsive:{
		        0:{
		            items:1,
		            dots: false,
		        },
		        768:{
		            items:2,
		            dots: false,
		        },
		        992:{
		            items:3,
		            dots: false
		        },
		        1198:{
		            items:3,
		            loop:true,
		            dots: false
		        },
		        1200:{
		            items:3,
		            loop:true,
		            dots: true
		        }
		    }
		});

		// testimonial slider
		$(".testimonial-carousel").owlCarousel({
			loop: true,
			dots: true,
			margin: 30,
			pullDrag: true,
			lazyLoad: true,
			autoplay: false,
			responsive:{
		        0:{
		            items:1,
		            dots: false,
		        },
		        576:{
		            items:2,
		            dots: false,
		        },
		        992:{
		            items:3,
		            dots: true
		        },
		        1000:{
		            items:3,
		            loop:true,
		        }
		    }
		});


		// Team Slider
		$(".brand-slider-active").owlCarousel({
			loop: false,
			dots: false,
			margin: 30,
			nav: false,
			autoplay: false,
			responsive:{
		        0:{
		            items:2,
		            dots: false,
		        },
		        576:{
		            items:3,
		            dots: false,
		        },
		        992:{
		            items:4,
		            dots: true,
		        },
		        1200:{
		            items:6,
		            loop:true,
		        }
		    }
		});

		// counter up activation

		$('.counter').counterUp({
		    delay: 10,
		    time: 1000
		});

		// Isotope for portfolio
			var $grid = $('.grid').isotope({
			  itemSelector: '.grid-item',
			});

			
			// filter items on button click
			$('.filter-button-group').on( 'click', 'button', function() {
			  var filterValue = $(this).attr('data-filter');
			  $grid.isotope({ filter: filterValue });
			});

			// change is-checked class on buttons
			$('.filter-button-group').each(function(i, buttonGroup) {
			    var $buttonGroup = $(buttonGroup);
			    $buttonGroup.on('click', 'button', function() {
			        $buttonGroup.find('.is-checked').removeClass('is-checked');
			        $(this).addClass('is-checked');
			    });
			});
		//popup gallery
		  $('.mix-hover').magnificPopup({
		      delegate: 'a.popup-link',
		      type: 'image',
		      tLoading: 'Loading image #%curr%...',
		      mainClass: 'mfp-img-mobile',
		      gallery: {
		          enabled: true,
		          navigateByImgClick: true,
		          preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		      }
		  });

			// custom career box
			$(".card").on("click",".card-header", function () {

				$(this).addClass("active").siblings().removeClass("active");

			});


		// wow js activation
		new WOW().init();


		// declare variable
        var scrollTop = $(".scrollTop");
        
          $(window).scroll(function() {
            // declare variable
            var topPos = $(this).scrollTop();
        
            // if user scrolls down - show scroll to top button
            if (topPos > 100) {
              $(scrollTop).css("opacity", "1");
        
            } else {
              $(scrollTop).css("opacity", "0");
            }
        
        }); // scroll END
            
              //Click event to scroll to top
            $(scrollTop).click(function() {
                $('html, body').animate({
                  scrollTop: 0
                }, 800);
                return false;
            
			}); // click() scroll top EMD

	});


}(jQuery));	

