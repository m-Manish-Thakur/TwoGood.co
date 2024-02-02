const videoConAnimation = () => {
  let videoCon = document.querySelector("#video");
  let playBtn = document.querySelector("#play");

  videoCon.addEventListener("mouseenter", () => {
    gsap.to(playBtn, {
      scale: 1,
      opacity: 1,
    });
  });

  videoCon.addEventListener("mouseleave", () => {
    gsap.to(playBtn, {
      scale: 0,
      opacity: 0,
    });
  });

  videoCon.addEventListener("mousemove", (dets) => {
    gsap.to(playBtn, {
      left: dets.x - 70,
      top: dets.y - 80,
    });
  });
};
videoConAnimation();

const loadingAnimation = () => {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });

  gsap.from("#video", {
    scale: 0.8,
    opacity: 0,
    delay: 1,
    duration: 1,
  });
};
loadingAnimation();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  multiplier: 0.8,
});

const mouseHover = () => {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function (dets) {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });

    elem.addEventListener("mouseleave", function (dets) {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
};

mouseHover();

// ##############   HUMBURGER MENU   ################

const menu = document.getElementById("menu");
const close = document.getElementById("close");

menu.onclick = () => {
  gsap.to("#openheader", {
    delay: 0.3,
    duration: 0.7,
  });
};

close.onclick = () => {
  gsap.to("#openheader", {
    delay: 0.3,
    duration: 0.7,
  });
};
