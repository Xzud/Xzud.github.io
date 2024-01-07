/* ------------------------------------------------------------
* Template Name    : Robert - Personal Portfolio
* Author           : WebFolio
* Version          : 1.0
------------------------------------------------------------ */

/* ======================================================================
  Table of Content:
 
  01. Remove Preloader
  02. Dark Mode
  03. Is in Viewport
  04. Header Sticky
  05. Navigation Link
  06. Activate Nav Link
  07. Mobile Navbar
  08. Skills Progressbar
  09. Testimonial Slider
  10. Porfolio Isotope Filter
  11. Jquery CounterUp
  12. Scroll Buttons
  13. Scroll to Top Arrow
  14. Typing Animation
  15. Contact Form
  16. Color Switcher
====================================================================== */

$(window).on("load", function () {
    removePreloader();
  });
  
  activateDarkMode();
  navigationLink();
  skillProgressbar();
  testimonialSlider();
  portfolioIsotope();
  jqueyCounter();
  scrollButtons();
  typeAnimation();
  mobileNavBar();
  contactForm();
  colorSwitcher();
  
  $(window).scroll(function () {
    headerSticky();
    activateNavLink();
    scrollTopArrow();
  });
  
  /* ----------------------------------------
  01. Remove Preloader
  ---------------------------------------- */
  
  function removePreloader() {
    $(".lds-ring").fadeOut();
    $(".preloader").delay(350).fadeOut("slow");
  }
  
  /* ----------------------------------------
  02. Dark Mode
  ---------------------------------------- */
  
  function activateDarkMode() {
    var isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDarkMode) {
      $("body").addClass("dark");
      $("#home").css("background-image", "url(" + $("#home").attr("data-bg-dark") + ")");
    }
  }
  
  /* ----------------------------------------
  03. Is in Viewport
  ---------------------------------------- */
  
  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop + 500 < viewportBottom;
  };
  
  /* ----------------------------------------
  04. Header Sticky
  ---------------------------------------- */
  
  function headerSticky() {
    if ($(window).scrollTop() >= 100) {
      $("header").attr("id", "navbar-sticky");
    } else {
      $("header").attr("id", "");
    }
  }
  
  /* ----------------------------------------
  05. Navigation Link
  ---------------------------------------- */
  
  function navigationLink() {
    $(".nav-link").on("click", function (e) {
      var anchor = $(this);
      $("html, body")
        .stop()
        .animate({ scrollTop: $(anchor.attr("href")).offset().top - 80 }, 800);
  
      if ($("#menu-btn").css("display") == "block") {
        $(".navbar .list").attr("id", "");
        $("#menu-btn").removeClass("fa-times");
        $("#menu-btn").addClass("fa-bars");
      }
  
      e.preventDefault();
    });
  }
  
  /* ----------------------------------------
  06. Activate Nav Link
  ---------------------------------------- */
  
  function activateNavLink() {
    $("section").each(function () {
      var sect = $(this);
      if (sect.isInViewport()) {
        $(".nav-link").removeClass("active");
        $(".nav-link[href='#" + $(sect).attr("id") + "']").addClass("active");
      }
    });
  }
  
  /* ----------------------------------------
  07. Mobile Navbar
  ---------------------------------------- */
  
  function mobileNavBar() {
    $("#menu-btn").click(function (e) {
      if ($(".navbar .list").attr("id") === "") {
        $(".navbar .list").attr("id", "nav-open");
        $(this).removeClass("fa-bars");
        $(this).addClass("fa-times");
      } else {
        $(".navbar .list").attr("id", "");
        $(this).removeClass("fa-times");
        $(this).addClass("fa-bars");
      }
    });
  }
  
  /* ----------------------------------------
  08. Skills Progressbar
  ---------------------------------------- */
  
  function skillProgressbar() {
    var percentages = document.querySelectorAll(".info span:nth-child(2)");
    var bars = document.getElementsByClassName("bar");
    for (var i = 0; i < percentages.length; i++) {
      bars[i].style.width = percentages[i].innerText;
    }
  }
  
  /* ----------------------------------------
  09. Testimonial Slider
  ---------------------------------------- */
  
  function testimonialSlider() {
    $(".owl-carousel").owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        600: { items: 1 },
        1000: { items: 2 },
      },
    });
  }
  
  /* ----------------------------------------
  10. Porfolio Isotope Filter
  ---------------------------------------- */
  
  function portfolioIsotope() {
    // Init Isotope
    let $container = $(".filter-items");
    $container.isotope({
      itemSelector: ".card",
      transitionDuration: "0.8s",
      layoutMode: "fitRows",
    });
  
    // Filter
    $(".filter-value").on("click", function (e) {
      $(".filter-value.active").removeClass("active");
      $(this).addClass("active");
      let selector = $(this).attr("data-filter");
      if (selector != "*") selector = "[data-filter='" + selector + "']";
      $container.isotope({ filter: selector });
      return false;
    });
  }
  
  /* ----------------------------------------
  11. Jquery CounterUp
  ---------------------------------------- */
  
  function jqueyCounter() {
    $(".count").counterUp({
      delay: 10,
      time: 1000,
    });
  }
  
  /* ----------------------------------------
  12. Scroll Buttons
  ---------------------------------------- */
  
  function scrollButtons() {
    /* Mouse Wheel */
    $("#scroll-mouse").click(function (e) {
      $("html, body")
        .stop()
        .animate({ scrollTop: $("#about").offset().top - 140 }, 800);
    });
    /* Scroll Arrow */
    $("#scroll-arrow").click(function (e) {
      $("html, body").stop().animate({ scrollTop: 0 }, 800);
    });
  }
  
  /* ----------------------------------------
  13. Scroll to Top Arrow
  ---------------------------------------- */
  
  function scrollTopArrow() {
    if ($(this).scrollTop() > 100) {
      $("#scroll-arrow").addClass("active");
    } else {
      $("#scroll-arrow").removeClass("active");
    }
  }
  
  /* ----------------------------------------
  14. Typing Animation
  ---------------------------------------- */
  
  function typeAnimation() {
    var typed = new Typed("#type-anim", {
      strings: $("#type-anim").attr("data").split("|||"),
      showCursor: true,
      smartBackspace: false,
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });
  }
  
  /* ----------------------------------------
  15. Contact Form
  ---------------------------------------- */
  
  //contact form js
  function contactForm() {
    // Get the form.
    var form = $("#contact-form");
    // Get the messages div.
    var formMessages = $("#contact-form .message");
    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
      // Stop the browser from submitting the form.
      e.preventDefault();
      // Serialize the form data.
      var formData = $(form).serialize();
      // Submit the form using AJAX.
      $.ajax({
        type: "POST",
        url: $(form).attr("action"),
        data: formData,
      })
        .done(function (response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass("error");
          $(formMessages).addClass("success");
          // Set the message text.
          $(formMessages).text(response);
          // Clear the form.
          $("#contact-form input, #contact-form textarea").val("");
        })
        .fail(function (data) {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass("success");
          $(formMessages).addClass("error");
          // Set the message text.
          if (data.responseText !== "") {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text("Oops! An error occured and your message could not be sent.");
          }
        });
    });
  }
  
  /* ----------------------------------------
  16. Color Switcher
  ---------------------------------------- */
  
  function colorSwitcher() {
    $(".gear-icon").on("click", function () {
      $(".color-switcher").toggleClass("active");
    });
  
    $(".color").each(function (index, element) {
      $(this).css("background", $(this).attr("data-color"));
    });
  
    $(".color").on("click", function () {
      let dataColor = $(this).attr("data-color");
      $(":root").css("--main-color", dataColor);
    });
  }
  