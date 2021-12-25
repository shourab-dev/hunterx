$(function () {
  gsap.registerPlugin(ScrollTrigger);
  // navbar toggler icon

  $(".initial").click(function () {
    $(".secondary").fadeToggle();
    $(this).hide();
  });

  $(".secondary").click(function () {
    $(".initial").fadeToggle();
    $(this).hide();
  });

  // nav bar toggler ends here

  // gsap landing page animation
  // gsap preloader
  gsap.to(".preloader .preloader_part", {
    duration: 1,
    ease: "Power3.easeInOut",
    height: 0,
    stagger: 0.3,
  });

  let timelineLanding = gsap.timeline({
    delay: 0.5,
  });

  // gsap navbar logo
  timelineLanding.from(".navbar_logo", {
    duration: 1,
    ease: "Power3.easeInOut",
    opacity: 0,
    scale: 2,
  });
  // gsap for navbar links
  timelineLanding.from("#myNav ul li ", {
    duration: 0.5,

    scale: 0,
    opacity: 0,
    stagger: 0.3,
  });
  // gsap for landing content
  timelineLanding.from(".landing_cnt", {
    duration: 1,
    y: 50,
    opacity: 0,
  });

  // featured section starts here
  // slick slider for featured section
  $(".featured_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: ".prev_arrow",
    nextArrow: ".next_arrow",
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // filtering data of featured slider
  $(".filter_list li button.filter_btn").click(function () {
    let filter = $(this).data("filter");
    $(".filter_list li button.filter_btn").removeClass("active");
    $(this).addClass("active");

    $(".featured_slider").slick("slickUnfilter");

    if (filter == "home") {
      $(".featured_slider").slick("slickFilter", ".home");
    } else if (filter == "villa") {
      $(".featured_slider").slick("slickFilter", ".villa");
    } else if (filter == "building") {
      $(".featured_slider").slick("slickFilter", ".building");
    } else {
      $(".featured_slider").slick("slickUnfilter");
    }
  });

  // featured section animation with gsap

  gsap.from(".heading_part", {
    scrollTrigger: {
      trigger: "#featured",
      start: "top center",
      end: "bottom bottom",
    },
    y: 50,
    opacity: 0,
    duration: 0.5,
  });

  gsap.from(".filter_list li", {
    duration: 0.5,
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#featured",
      start: "top center",
      end: "bottom bottom",
    },
  });

  gsap.from(".featured_slider .featured_slide", {
    duration: 0.5,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#featured",
      start: "100px center",
      end: "bottom bottom",
      pin: true,
    },
  });
});
