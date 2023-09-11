// fullPage.js functionality
// Credit to alvarotrigo https://github.com/alvarotrigo/fullPage.js
var $header_top = $('.header-top');
var $nav = $('nav');
  // --primary-blue: #005191;
  // --primary-blue-rgba: rgba(16, 22, 127, 0.5);
  // --primary-red: #ff443b;
  // --primary-yellow: #ffb351;
  // --primary-orange: #f57814;
const color_primary_blue = "#005191";
const color_secondary_blue = "#7c81b8";
const color_primary_red = "#ff443b";
const color_primary_yellow = "#ffb351";
const color_primary_orange = "#f57814";
const color_dark_grey = "#545454";
const color_medium_grey = "#ccc";
const color_light_grey = "#e1e1e1";
const bg_grey = "#f3f3f3";
const color_black = "#000";
const color_white = "#fff";
$('#menuIcon').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});
// $header_top.find('a').on('click', function() {
//   $(this).parent().toggleClass('open-menu');
// });

$(document).ready(() => {
  $('#fullpage').fullpage({
    sectionsColor: [
      bg_grey,
      bg_grey,
      bg_grey,
      bg_grey,
      bg_grey,
      bg_grey,
      bg_grey,
      bg_grey,
    ],
    // sectionSelector: '.vertical-scrolling',
    // sectionSelector: 'section',
    navigation: true,
    slidesNavigation: true,
    autoScrolling: true,
    // bigSectionDestination: 'top',
    scrollOverflow: true,
    paddingTop: '8rem',
    anchors: ['home','daycenters', 'emergencyshelter', 'transitionalhousing', 'supportivehousing', 'rapidrehousing', 'evictionprevention', 'affordablehousing'],
    menu: '#menu',
  
    afterLoad: function(anchorLink, index) {
      // $header_top.css('background', 'rgba(0, 47, 77, .3)');
      // $header_top.css('background', 'rgba(0, 81, 145, 1)');
      $nav.css('background', 'rgba(0, 81, 145 1)');
      if ($(window).width() > 768) {
        $('#fp-nav').show();
      } else {
        $('#fp-nav').hide();
      }
      $.fn.fullpage.setAllowScrolling(true);
      $.fn.fullpage.setKeyboardScrolling(true);
      // if (index == 7) {
      //     $('#fp-nav').hide();
      //   }
    },
  
    // onLeave: function(index, nextIndex, direction) {
    //   if(index == 7 && $(window).width() > 768) {
    //     console.log('window width')
    //     $('#fp-nav').show();
    //   } else {
    //     $('#fp-nav').hide();
    //   };
    // },
  });
});

// Modal Functionality
// toggle scrollability of page if modal is open
$(document).on('show.bs.modal', '.modal', function() {
  $.fn.fullpage.setAllowScrolling(false);
  $.fn.fullpage.setKeyboardScrolling(false);
});

$(document).on('hide.bs.modal', '.modal', function() {
  $.fn.fullpage.setAllowScrolling(true);
  $.fn.fullpage.setKeyboardScrolling(true);
});

// Mouseout function
$(document).on('mouseleave', 'nav', function(){
  $header_top.toggleClass('open-menu');
});

$(document).on('click', 'nav ul li a', function() {
  $header_top.toggleClass('open-menu');
})

// $('#continueBtn').on('click', function() {
//   $.fn.fullpage.moveSectionDown();
// })