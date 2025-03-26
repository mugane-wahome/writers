(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);


let lastScrollY = window.scrollY;

  window.addEventListener("scroll", function () {
    let whatsappButton = document.getElementById("whatsapp-button");
    let scrollY = window.scrollY;

    if (Math.abs(scrollY - lastScrollY) > 10) { // Detects scroll movement
      whatsappButton.style.transform = "rotate(5deg)";
      setTimeout(() => {
        whatsappButton.style.transform = "rotate(-5deg)";
      }, 100);
      setTimeout(() => {
        whatsappButton.style.transform = "rotate(0deg)";
      }, 200);
    }
    lastScrollY = scrollY;
  });

  // Hover Effect
  document.getElementById("whatsapp-button").addEventListener("mouseenter", function() {
    this.style.transform = "scale(1.2)";
    this.style.backgroundColor = "#1ebe57"; // Slightly darker green
  });

  document.getElementById("whatsapp-button").addEventListener("mouseleave", function() {
    this.style.transform = "scale(1)";
    this.style.backgroundColor = "#25D366"; // Original green
  });

//   document.getElementById("buyNowButton").addEventListener("mouseover", function() {
//     this.style.backgroundColor = "#218838"; // Darker green on hover
// });

// document.getElementById("buyNowButton").addEventListener("mouseout", function() {
//     this.style.backgroundColor = "#28a745"; // Original green when mouse leaves
// });

