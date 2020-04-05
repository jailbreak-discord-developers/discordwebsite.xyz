$(function() {

      "use strict";

      var nav_offset_top = $('header').height() + 50;

      /*-------------------------------------------------------------------------------

        Smooth scrolling

      -------------------------------------------------------------------------------*/

      $(document).ready(function() {
        $("a").on('click', function(event) {

          if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function() {

              window.location.hash = hash;
            });
          }
        });
      });

      /*-------------------------------------------------------------------------------

	  Navbar

	-------------------------------------------------------------------------------*/

      (function($) {
        "use strict";
        var nav = $('nav');
        var navHeight = nav.outerHeight();

        $('.navbar-toggler').on('click', function() {
          if (!$('#mainNav').hasClass('navbar-reduce')) {
            $('#mainNav').addClass('navbar-reduce');
          }
        })

        $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: (target.offset().top - navHeight + 5)
              }, 1000, "easeInOutExpo");
              return false;
            }
          }
        });

        $('.js-scroll').on("click", function() {
          $('.navbar-collapse').collapse('hide');
        });

        $('body').scrollspy({
          target: '#mainNav',
          offset: navHeight
        });

        $(window).trigger('scroll');
        $(window).on('scroll', function() {
          var pixels = 50;
          var top = 1200;
          if ($(window).scrollTop() > pixels) {
            $('.navbar-expand-md').addClass('navbar-reduce');
            $('.navbar-expand-md').removeClass('navbar-trans');
          } else {
            $('.navbar-expand-md').addClass('navbar-trans');
            $('.navbar-expand-md').removeClass('navbar-reduce');
          }
          if ($(window).scrollTop() > top) {
            $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
          } else {
            $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
          }
        });

        /*-------------------------------------------------------------------------------

	  clients logo slider

	-------------------------------------------------------------------------------*/

        if ($('.clients_slider').length) {
          $('.clients_slider').owlCarousel({
            loop: true,
            margin: 30,
            items: 5,
            nav: false,
            dots: false,
            responsiveClass: true,
            autoplay: 2500,
            slideSpeed: 300,
            paginationSpeed: 500,
            responsive: {
              0: {
                items: 1,
              },
              768: {
                items: 3,
              },
              1024: {
                items: 4,
              },
              1224: {
                items: 5
              }
            }
          })
        }

        /*-------------------------------------------------------------------------------

	  testimonial slider

	-------------------------------------------------------------------------------*/

        if ($('.testimonial').length) {
          $('.testimonial').owlCarousel({
            loop: true,
            margin: 30,
            items: 5,
            nav: false,
            dots: true,
            responsiveClass: true,
            slideSpeed: 300,
            paginationSpeed: 500,
            responsive: {
              0: {
                items: 1
              }
            }
          })
        }

        /*-------------------------------------------------------------------------------

	  Mailchimp

	-------------------------------------------------------------------------------*/

        function mailChimp() {
          $('#mc_embed_signup').find('form').ajaxChimp();
        }
        mailChimp();
      });
