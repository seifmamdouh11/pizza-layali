$(document).ready(function () {
  $(window).scroll(function () {
    const scroll = $(window).scrollTop();

    if (scroll === 0) {
      $("#homeBtn, #aboutBtn, #offBtn, #contBtn, #menuBtn").addClass(
        "navBtn"
      );
    } else {
      $("#homeBtn, #aboutBtn, #offBtn, #contBtn, #menuBtn").removeClass(
        "navBtn"
      );
    }

    if (scroll >= 80) {
      $("nav").addClass("dark-mode");
    } else {
      $("nav").removeClass("dark-mode");
    }
    function navHover(n, n2, btn) {
      if (scroll >= n && scroll <= n2) {
        $(btn).addClass("activeBtn");
      } else {
        $(btn).removeClass("activeBtn");
      }
    }

    navHover(635, 1300, "#aboutBtn");
    navHover(1325, 2035, "#offBtn");
    navHover(2040, 2685, "#menuBtn");
    navHover(2695, 3000, "#contBtn");
  });
});

$(function () {
  const $carousel = $("#carousel");
  const scrollAmount = 400;

  $(".arrow-left").click(function () {
    $carousel.animate({ scrollLeft: "-=" + scrollAmount }, 200);
  });

  $(".arrow-right").click(function () {
    $carousel.animate({ scrollLeft: "+=" + scrollAmount }, 200);
  });
});


$('.fa-bars, .content').on('mouseover', function () {
  $(".content").css('max-height', '500px'); 
});

$('.fa-bars, .content').on('mouseout', function () {
  $(".content").css('max-height', '0px');
});
