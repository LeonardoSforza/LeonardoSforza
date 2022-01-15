let mm = new MagnetMouse({
  magnet: {
    element: ".magnet",
  },
  follow: {
    element: ".follow",
  },
  inCallback: function (data) {
    let follow = document.querySelector(mm.config.follow.element);

    follow.style.width = data.elem.width + 4;
    follow.style.height = data.elem.height + 4;
    follow.style.left = -(data.elem.width / 2) - 2;
    follow.style.top = -(data.elem.height / 2) - 2;

    console.log(`${follow.clientWidth}`);

    follow.classList.add("follow-mouse-active");
  },
  outCallback: function () {
    let follow = document.querySelector(mm.config.follow.element);

    follow.style.width = "";
    follow.style.height = "";
    follow.style.left = "";
    follow.style.top = "";

    follow.classList.remove("follow-mouse-active");
  },
});

mm.init();
