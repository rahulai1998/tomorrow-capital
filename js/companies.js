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
};
