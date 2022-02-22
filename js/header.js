hamburgerBtn = document.querySelector(".hamburger");
body = document.querySelector("body");
header = document.querySelector(".header");
hamburgerBtn.addEventListener("click", () => {
  header.classList.toggle("open-menu");
  body.classList.toggle("stop-scroll")
});


// For scroll to top

let btn = $('#button-top');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 2000);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If scrolled down and past the navbar, add class .nav-up.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }
  lastScrollTop = st;
}

// window.onload = () =>{
//   if(body.classList.contains('stop-scroll'))
//     body.classList.remove('stop-scroll');
//   else  
//   body.classList.add('stop-scroll');
// }
// Function for smooth scrolling
// (function () {
//   var speed = 1000;
//   var moving_frequency = 10; // Affects performance !
//   var links = document.getElementsByTagName("a");
//   var href;
//   for (var i = 0; i < links.length; i++) {
//     href =
//       links[i].attributes.href === undefined
//         ? null
//         : links[i].attributes.href.nodeValue.toString();
//     if (href !== null && href.length > 1 && href.substr(0, 1) == "#") {
//       links[i].onclick = function () {
//         var element;
//         var href = this.attributes.href.nodeValue.toString();
//         if ((element = document.getElementById(href.substr(1)))) {
//           var hop_count = speed / moving_frequency;
//           var getScrollTopDocumentAtBegin = getScrollTopDocument();
//           var gap =
//             (getScrollTopElement(element) - getScrollTopDocumentAtBegin) /
//             hop_count;

//           for (var i = 1; i <= hop_count; i++) {
//             (function () {
//               var hop_top_position = gap * i;
//               setTimeout(function () {
//                 window.scrollTo(
//                   0,
//                   hop_top_position + getScrollTopDocumentAtBegin
//                 );
//               }, moving_frequency * i);
//             })();
//           }
//         }
//         return false;
//       };
//     }
//   }

//   var getScrollTopElement = function (e) {
//     var top = 0;
//     while (e.offsetParent != undefined && e.offsetParent != null) {
//       top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
//       e = e.offsetParent;
//     }
//     header.classList.remove("open-menu");
//     return top;
//   };

//   var getScrollTopDocument = function () {
//     header.classList.remove("open-menu");
//     return document.documentElement.scrollTop + document.body.scrollTop;
//   };
// })();
