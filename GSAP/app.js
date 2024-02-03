gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
});

let tl = gsap.timeline();

tl.from("#header img, #header #nav a, #header #right h2, #header #right button", {
  y: -80,
  duration: 0.2,
  delay: 0.2,
  opacity: 0,
  stagger: 0.2,
});

tl.from("#page1 h1", {
  y: 50,
  opacity: 0,
  duration: 0.3,
  stagger: 0.2,
});

tl.from("h3", {
  y: 20,
  opacity: 0,
  duration: 0.3,
});

tl.from("#rightImg, #leftImg", {
  scale: 0.5,
  opacity: 0,
  stagger: 0.2,
});

tl.to("h3", {
  y: 20,
  repeat: -1,
  duration: 0.7,
  yoyo: true,
});

tl.from("#social i", {
  y: 20,
  duration: 0.2,
  opacity: 0,
});

tl.to("#page2 h1", {
  x: -150,
  duration: 0.3,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "#main",
    markers: true,
    start: "top 50%",
    scrub: 2,
  },
  yoyo: 2,
});

tl.to("#page2 h2", {
  x: 150,
  duration: 0.3,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "#main",
    markers: true,
    start: "top 50%",
    scrub: 2,
  },
  yoyo: 2,
});
