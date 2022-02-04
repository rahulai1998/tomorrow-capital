$('.acc_ctrl').on('click', function(e) {
  e.preventDefault();
    let $this = $(this);
    if ($this.next().hasClass('active')) {
      $this.next().removeClass('active');
      $this.next().slideUp(300);
      $this.next().removeClass('rotate');
    } else {
      $this.parent().parent().find('li .acc_panel').removeClass('active');
      $this.parent().parent().find('li .acc_panel').slideUp(300);
      $this.next().toggleClass('active');
      $this.next().addClass('active');
      $this.next().addClass('rotate');
      $this.next().slideToggle(300);
    }

});

function removeRotate(buttons) {
  buttons.forEach(btn => {
    const active = btn.nextElementSibling;
    if(!active.classList.contains('active')) {
      btn.classList.remove('rotate');
    }
  })
}

function handleOpenings() {

  const btns = document.querySelectorAll(".acc_ctrl");

  
  btns.forEach(btn => {
    
    const active = btn.nextElementSibling;

    btn.addEventListener('click', ()=>{

      const active = btn.nextElementSibling;
      removeRotate(btns);
      if(active.classList.contains('active'))
      {
        btn.classList.add('rotate');
      }else {
        btn.classList.remove('rotate');
      }
    });
  })
}

function handleCarousel() {
  
  let owlLeft = $('.carousel-for-mobile').owlCarousel({
    stagePadding : -60,
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    navText: [$('.prev'),$('.next')],
    responsive:{
        0:{
            items:2
        },
        768:{
            items:3
        }
    }
  })

  $('.btn-next').click(() => {
    owlLeft.trigger('next.owl.carousel')
    
  })
  $('.btn-prev').click(() => {
    owlLeft.trigger('prev.owl.carousel')
})
}


// hovering for sliders
function hover(element, hoverClass){
  element.addEventListener('mouseenter', e => element.classList.add(hoverClass))
  element.addEventListener('mouseleave', e => element.classList.remove(hoverClass))
}

function handleSliders() {
  const sliders = document.querySelectorAll(".img");
  
  sliders.forEach(slider => {
    hover(slider, "slide-hover");
  })
}

// $(function(){   
//   $(".is-active-effect").hover(function(){
//       $(this).addClass("is-active-img");
//       $(this).next().hasClass("desc");
//   }, function(){
//       $(this).removeClass("is-active-img");
//       $(this).next().removeClass("desc");
//   })
// });

// $( "active-img" )
//   .odd()
//     .hide()
//   .end()
//   .even()
//     .hover(function() {
//       $( this )
//         .toggleClass( "is-active-img" )
//         .next()
//           .stop( true, true )
//           .slideToggle();
//     });

window.onload = () => {
  handleOpenings();
  handleCarousel();
  // handleSliders();
}