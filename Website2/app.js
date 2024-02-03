const init = () => {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
};
init();

const tl = gsap.timeline();

const time = () => {
  var a = 0;

  setInterval(() => {
    a += Math.floor(Math.random() * 20);
    if (a < 100) {
      document.querySelector("#loader h1").innerHTML = a + "%";
    } else {
      a = 100;
      document.querySelector("#loader h1").innerHTML = a + "%";
    }
  }, 150);
};

tl.to("#loader h1", {
  delay: 0.5,
  duration: 01,
  onStart: time(),
});

tl.to("#loader", {
  top: "-100vh",
  delay: 0.3,
  duration: 1,
  yoyo: true,
});

gsap.to("#page1 h1", {
  transform: "translateX(-100%)",
  duration: 2,
  delay: 0.5,
  yoyo: true,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    // markers: true,
    start: "top 0%",
    end: "top -200%",
    scrub: 4,
    pin: true,
  },
});
