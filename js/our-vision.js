let owlLeft = $(".owl-carousel-left")
  .owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    navText: [$(".prev"), $(".next")],
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
  })
  .on("dragged.owl.carousel", function (event) {
    // console.log("event : ", event.relatedTarget["_drag"]["direction"]);
    if (event.relatedTarget["_drag"]["direction"] === "left") {
      owlRight.trigger("next.owl.carousel");
    } else {
      owlRight.trigger("prev.owl.carousel");
    }
  });

let owlRight = $(".owl-carousel-right")
  .owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    navText: [$(".prev"), $(".next")],
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
  })
  .on("dragged.owl.carousel", function (event) {
    // console.log("event : ", event.relatedTarget["_drag"]["direction"]);
    if (event.relatedTarget["_drag"]["direction"] === "left") {
      owlLeft.trigger("next.owl.carousel");
    } else {
      owlLeft.trigger("prev.owl.carousel");
    }
  });

$(".btn-next").click(() => {
  owlLeft.trigger("next.owl.carousel");
  owlRight.trigger("next.owl.carousel");
});
$(".btn-prev").click(() => {
  owlLeft.trigger("prev.owl.carousel");
  owlRight.trigger("prev.owl.carousel");
});

const carouselToRemove = document.querySelector(".owl-carousel-left");
const mediaQuery = window.matchMedia("(max-width: 767px)");
const cloned = document.querySelectorAll(".cloned");

function hideCloned() {
  cloned.forEach((clone) => {
    clone.style.display = "none";
  });
}
function visibleCloned() {
  cloned.forEach((clone) => {
    clone.style.display = "unset";
  });
}

function handleTabletChange(e) {
  if (e.matches) {
    carouselToRemove.classList.remove("owl-carousel");
    carouselToRemove.classList.remove("owl-theme");
    carouselToRemove.classList.add("hide-carousel");
    hideCloned();
  } else {
    carouselToRemove.classList.add("owl-carousel");
    carouselToRemove.classList.add("owl-theme");
    carouselToRemove.classList.remove("hide-carousel");
    visibleCloned();
  }
}
handleTabletChange(mediaQuery);
mediaQuery.addListener(handleTabletChange);

// for slider accordian mobile view
$(".acc_ctrl-1").on("click", function (e) {
  let $this = $(this);
  if ($this.next().next().hasClass("active")) {
    $this.next().next().removeClass("active");
    $this.next().next().slideUp(300);
    $this.removeClass("rotate");
  } else {
    $this.parent().parent().find(".acc_panel").removeClass("active");
    $this.parent().parent().find(".acc_panel").slideUp(300);
    $this.next().next().toggleClass("active");
    $this.next().next().slideToggle(300);
    $this.addClass("rotate");
  }
});

// for accoridan
// $(".acc_ctrl").on("click", function (e) {
//   let $this = $(this);
//   if ($this.next().hasClass("active")) {
//     $this.next().removeClass("active");
//     $this.next().slideUp(300);
//     $this.removeClass("rotate");
//   } else {
//     $this.parent().parent().find(".acc_panel").removeClass("active");
//     $this.parent().parent().find(".acc_panel").slideUp(300);
//     $this.next().toggleClass("active");
//     $this.next().slideToggle(300);
//     $this.addClass("rotate");
//   }
// });

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

window.onload = () => {
  handleSayHi();
  handleTabletChange(mediaQuery);
};
