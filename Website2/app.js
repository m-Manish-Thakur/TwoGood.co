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

gsap.to("#header h1", {
  duration: 0.5,
  y: -50,
  opacity: 0,
  scrollTrigger: {
    trigger: "#header h1",
    scroller: "#main",
    start: "top 5%",
    scrub: 2,
  },
});

// ################   Page 1 Animation  ########################

const cursorEffect = () => {
  const page1 = document.querySelector("#page1");
  const cursor = document.querySelector("#cursor");

  page1.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });
  page1.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 1,
    });
  });

  page1.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 0,
    });
  });
};
cursorEffect();

gsap.from("#page1 h1 span", {
  y: "100%",
  duration: 1,
  delay: 2.5,
  stagger: 0.1,
});

// ################   Page 2 Animation  ########################

gsap.from("#page2 .elem1 p", {
  y: "100%",
  duration: 0.3,
  stagger: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2 .elem1 p",
    scroller: "#main",
    start: "top 60%",
    end: "top 40%",
    scrub: 2,
  },
});

gsap.from("#page2 #elem2 p", {
  y: "51px",
  duration: 1,
  stagger: 0.1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2 #elem2 p",
    scroller: "#main",
    start: "top 60%",
    end: "top 0%",
    scrub: 2,
  },
});

// ##########################   Page 3   ##############################
