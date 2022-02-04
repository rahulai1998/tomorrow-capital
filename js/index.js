$(".acc_ctrl").on("click", function (e) {
  e.preventDefault();
  let $this = $(this);
  if ($this.next().hasClass("active")) {
    $this.next().removeClass("active");
    $this.next().slideUp(300);
    $this.addClass("rotate");
  } else {
    $this.parent().parent().find("li .acc_panel").removeClass("active");
    $this.parent().parent().find("li .acc_panel").slideUp(300);
    $this.next().toggleClass("active");
    $this.next().slideToggle(300);
  }
});

// owl carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:true,
  slideTransition: 'linear',
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

function handleSayHi() {
  const btnEnq = document.querySelector(".btn-enq");
  const btnJoin = document.querySelector(".btn-join");
  const formEnq = document.querySelector(".form1");
  const formJoin = document.querySelector(".form2");
  btnEnq.classList.add("form-active");
  formEnq.classList.add("form-active");

  btnEnq.addEventListener("click", () => {
    if (btnEnq.classList.contains("form-active")) {
      btnJoin.classList.remove("form-active");
    } else {
      btnEnq.classList.add("form-active");
      btnJoin.classList.remove("form-active");
    }

    if (formEnq.classList.contains("form-active")) {
      formJoin.classList.remove("form-active");
    } else {
      formEnq.classList.add("form-active");
      formJoin.classList.remove("form-active");
    }
  });

  btnJoin.addEventListener("click", () => {
    if (btnJoin.classList.contains("form-active")) {
      btnEnq.classList.remove("form-active");
    } else {
      btnJoin.classList.add("form-active");
      btnEnq.classList.remove("form-active");
    }

    if (formJoin.classList.contains("form-active")) {
      formEnq.classList.remove("form-active");
    } else {
      formJoin.classList.add("form-active");
      formEnq.classList.remove("form-active");
    }
  });
}

function removeRotate(buttons) {
  buttons.forEach((btn) => {
    const active = btn.nextElementSibling;
    if (!active.classList.contains("active")) {
      btn.classList.remove("rotate");
    }
  });
}
function handleSupport() {
  const images = [
    "images/overall-support/build-team.png",
    "images/overall-support/brand-strategy.png",
    "images/overall-support/provide-network.png",
    "images/overall-support/future-fund-raise.png"
  ];

  const btns = document.querySelectorAll(".acc_ctrl");
  const imgBody = document.querySelector(".support-body-image img");

  btns.forEach((btn) => {
    const active = btn.nextElementSibling;

    btn.addEventListener("click", () => {
      const active = btn.nextElementSibling;
      removeRotate(btns);
      if (active.classList.contains("active")) {
        const img = images[parseInt(active.dataset.at)];
        imgBody.src = img;
        btn.classList.add("rotate");
      } else {
        btn.classList.remove("rotate");
      }
    });
  });
}
function handleInvest() {
  const images = [
    "images/invest.png",
    "images/valuable-thoughts/card_1.png",
    "images/valuable-thoughts/card_2.png",
    "images/valuable-thoughts/card_3.png"
  ];

  const btns = document.querySelectorAll(".owl-dot");
  const imgBody = document.querySelector(".img-box .img img");

  btns.forEach((btn, i) => {
    const active = btn.nextElementSibling;
    console.log(i);
    btn.addEventListener("click", () => {
      const img = images[i];
      imgBody.src = img;
    });
  });
}

window.onload = () => {
  handleSayHi();
  handleSupport();
};

// $(".content-btn").on("click", function (e) {
//   e.preventDefault();
//   let $this = $(this);
//   let $desc = $this.prev().find(".desc");
//   let $dots = $this.prev().find(".dots");
//   if($desc.hasClass("open")) {
//     $desc.removeClass("open")
//     $desc.slideUp(300);
//     $dots.css({
//       "opacity" : "1",
//     })
//     $this.text("READ MORE")

//   }else {
//     $desc.addClass("open")
//     $desc.slideToggle(300);
//     $dots.css({
//       "opacity" : "0",
//     })
//     $this.text("READ LESS")
//   }
// });

// const playPause = document.querySelector(".play-pause");
// const icon = playPause.firstElementChild;
// const video = document.getElementById("myvideo");

// video.addEventListener("click", () => {
//   console.log("clicked")
//   if (video.paused) {
//     icon.style.opacity = '0';
//   } else {
//     icon.style.opacity = '1';
//   }
// });

